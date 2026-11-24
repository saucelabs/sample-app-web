# Favorites feature — design

## Intent and why

Every catalog item should be favoritable, independent of the cart. A
shopper browsing the inventory grid, an item detail page, or any of
the three Dynamic Catalog demo pages can star an item to save it for
later, without committing to buying it. The Inventory page should let
them switch to a favorites-only view. The Cart page should surface
everything they've favorited, with a one-click way to move an item
from "saved" to "in cart."

This app has no backend — logins are a client-side cookie check
against a hardcoded username list, and the cart is already a
`localStorage`-backed static class. Favorites follows the same model:
a client-local list, not a per-account server record. It needs to
survive logging out and back in, which `localStorage` already does
(it isn't tied to the session cookie), so no new persistence
mechanism is needed.

## Goals

- A star toggle on every catalog item's image, usable from the
  Inventory grid, the item detail page, and the Dynamic Catalog cards
  on the Spinner/Slider routes (the Lazy Load route is excluded — see
  **Decided — the Lazy Load page's separate catalog** below).
- A shopper can favorite any number of items.
- Favorites persist across logout/login and browser restarts (same
  guarantee the cart already has).
- The Inventory page can be filtered to favorites-only without losing
  the current sort order.
- The Cart page shows a Favorites section; "Move to cart" adds the
  item to the cart **and leaves it in Favorites**.

## Non-goals

- No per-account scoping. Like the cart, Favorites is one shared
  client-local list — it is not tied to which of the six demo
  usernames is currently logged in.
- No backend/API or cross-device sync — out of scope given there is
  no server in this app.
- No deliberately-broken behavior for `problem_user`/`error_user`/etc.
  The rest of the app plants intentional bugs for specific demo users
  to exercise test automation; replicating that pattern for Favorites
  was not requested and isn't part of this design.
- No changes to how cart items or inventory data are sourced (both
  continue to come from the static `InventoryData` arrays).

## Anti-goals

- Don't let the favorite star be clickable through to item navigation
  — image areas are wrapped in a link to the item detail page today;
  the star click must not trigger that navigation.
- Don't make "Move to cart" ambiguous — it must never remove the item
  from Favorites (confirmed explicitly: it stays favorited after
  moving).
- Don't silently drop the 100% branch/function/line/statement coverage
  threshold enforced in `jest.config.js` — all new code needs tests
  that hit every branch.

## Constraints

- No backend: everything is client-local (`localStorage`), matching
  `src/utils/shopping-cart.js`.
- `src/components/DynamicCatalogItemCard.jsx` currently has zero
  interactive elements (no buttons at all) — this is the first
  interaction added to it.
- The project has no Ant Design (`antd`) dependency. The ask to
  "maintain antd design standards" is interpreted as: borrow antd's
  visual conventions (clean borders, spacing, segmented controls,
  floating card actions) and implement them with the existing
  hand-rolled CSS system — not add `antd` as a new dependency.
- Jest coverage threshold is 100% across the board; Storybook stories
  exist for most interactive components today (`Button`, `CartItem`,
  `HeaderContainer`, `InventoryListItem`, `Select`, `SubmitButton`) —
  new interactive components should follow that convention.

## Approaches considered

### Favorite icon — placement and style (on the image component)

Three options were mocked:

- **A.** White circular badge, top-right corner (antd Card
  "extra-action" convention).
- **B.** Same circular badge, mirrored to the top-left.
- **C.** Borderless star with a drop-shadow for contrast, no
  background circle (Pinterest/Instagram-style save icon).

**Picked: C.** Lighter-weight than a badge, reads cleanly over both
small grid thumbnails and the large detail-page photo without adding
a visual element that competes with the product image itself.

### "Favorites only" view on the Inventory page

Three options were mocked:

- **A.** Add "★ Favorites only" as a 5th entry in the existing sort
  dropdown. Least new UI, but conflates sort and filter — picking it
  means losing whatever sort order was active.
- **B.** A segmented "All / Favorites" control next to the sort
  dropdown. Filter and sort stay independent; sort order is preserved
  when the view is toggled.
- **C.** A single star icon-button toggle next to the sort dropdown.

**Picked: B.** Keeps sort and filter as independent axes (toggling
the view never disturbs the active sort), and is the most explicit
of the three about what it does.

### Favorites section on the Cart page

Three options were mocked:

- **A.** Appended below the cart items list, before the footer
  buttons.
- **B.** Promoted above the cart items as a highlighted banner.
- **C.** Collapsible, collapsed by default.

**Picked: A.** Cart contents (what's about to be bought) stay primary
and uninterrupted; Favorites reads as a clear secondary section with
nothing hidden behind an extra click.

### Storage mechanism

- **`localStorage`, mirroring `ShoppingCart`'s existing pattern**
  (picked) — array of item ids, synchronous, already proven in this
  codebase, satisfies the "survives relogin" requirement for free.
- `sessionStorage` — rejected: cleared when the tab closes, doesn't
  meet the "survives relogin" requirement if that happens in a new
  tab/session.
- `IndexedDB` — rejected: unnecessary complexity for what is just a
  flat array of ids; no query/transaction needs that would justify it.

## Decisions

- **New `Favorites` store** (`src/utils/favorites.js`), a static class
  mirroring `ShoppingCart`'s API and shape: `addItem`, `removeItem`,
  `isItemInFavorites`, `getFavoriteItems`, `registerFavoritesListener`
  (same listener/`forceUpdate` pub-sub pattern `CartButton` already
  uses against `ShoppingCart`). Backed by a new `localStorage` key,
  e.g. `favorite-items`. A plain parallel class, not a shared base
  with `ShoppingCart` — consistent with how this codebase already
  keeps per-concern components separate rather than sharing
  abstractions.
- **New `FavoriteToggle` component** (`src/components/`): the
  drop-shadow star, absolutely positioned over its parent (callers
  give the image wrapper `position: relative`). Takes an item id,
  renders filled/outline based on `Favorites.isItemInFavorites(id)`,
  calls `stopPropagation`/`preventDefault` on click so it never
  triggers the surrounding image's link-to-detail navigation.
- **Wire `FavoriteToggle` into:**
  - `InventoryListItem.jsx` (main grid)
  - `InventoryItem.jsx` (item detail page)
  - `DynamicCatalogItemCard.jsx`, only rendered when `isLoaded` is true
    (no image to overlay in the placeholder state) and only on the
    Spinner/Slider routes — suppressed on the Lazy Load route via a
    `showFavoriteToggle` prop threaded through `LazyCatalogCard`, per
    **Decided — the Lazy Load page's separate catalog** below.
- **Inventory page filter:** a new segmented "All / Favorites"
  control added to `Inventory.jsx`'s `secondaryRightComponent`, next
  to the existing `Select`. `Inventory.jsx` registers as a
  `Favorites` listener (same pattern as `CartButton`'s cart listener)
  so toggling or un-favoriting while in the favorites-only view
  updates the rendered list immediately. The existing sorted
  `inventoryList` state is left untouched; the segmented control adds
  a second piece of state that filters the rendered output down to
  favorited ids without altering sort logic.
- **Cart page Favorites section:** appended in `Cart.jsx` below the
  existing `cart_list`, before `cart_footer`. Sourced the same way
  cart contents already are — `Favorites.getFavoriteItems()` ids
  mapped against the static `InventoryData` array. See **Open
  question** below — this only resolves correctly for items favorited
  from a page backed by `InventoryData`.
- **"Move to cart" button:** calls `ShoppingCart.addItem(id)` only.
  No call to `Favorites.removeItem` — the item stays favorited.
  `ShoppingCart.addItem` is already a no-op if the id is present, so
  clicking "Move to cart" again on an already-in-cart favorite is
  harmless.
- **Un-favoriting from the Cart page:** each Favorites row reuses the
  same `FavoriteToggle` component (filled star, click removes it from
  the list) rather than inventing a second removal control.
- **Empty states (my call):** the Inventory favorites-only view shows
  a simple centered "No favorites yet" message (styled like
  `DynamicCatalogItemCard`'s existing "Loading…" placeholder) in place
  of the grid when there are none. The Cart page's Favorites section
  (heading and all) is omitted entirely when there are no favorites,
  rather than showing an empty heading — this keeps the Cart page
  looking exactly as it does today for anyone who hasn't used the
  feature yet.
- **Demo-user positional quirks under the favorites filter (my
  call):** `Inventory.jsx` picks certain visual/problem-user bugs by
  the loop index of the item being rendered (e.g. `i === 0`,
  `i === 5`). When the favorites-only filter is active, these indices
  are computed against the filtered array actually being rendered,
  not the original unfiltered sort order. This keeps the render logic
  to one `.map()` with one index, and is acceptable because these
  quirks exist solely to drive visual-regression/test-automation
  scenarios against the default "All" view — no new test coverage is
  being added for their behavior while the favorites filter is active.

## Decided — the Lazy Load page's separate catalog

The Inventory grid, item detail page, and the Spinner/Slider Dynamic
Catalog pages all render from the same 6-item `InventoryData` (ids
0–5). The **Lazy Load** Dynamic Catalog page is different: it renders
from a _separate_ 22-item `InventoryDataLong` array (ids 0–21,
cycling), which reuses the same id numbers to mean different products
— e.g. id `1` is "Sauce Labs Bolt T-Shirt" in `InventoryData` but
"Sauce Labs Bolt T-Shirt (XS)" in `InventoryDataLong`. `LazyCatalogCard`
(used only by the Lazy Load page) wraps the same `DynamicCatalogItemCard`
this design wires `FavoriteToggle` into, so favoriting an item there
writes an id into the same `Favorites` store as everywhere else.

That collision means, as designed, favoriting from the Lazy Load page
would be unsafe everywhere outside it:

- For ids 0–5, the Favorites filter and Cart section would resolve
  the **wrong product** (silently swapping in the `InventoryData` item
  that happens to share that id).
- For ids 6–21, the favorite has **no match at all** outside Lazy
  Load — it would just disappear from the favorites-only view and the
  Cart Favorites section.

This isn't a pre-existing limitation — nothing today writes a Lazy
Load id anywhere else, since `DynamicCatalogItemCard` currently has no
interactive elements. It's created by this feature.

**Decided: Option A — exclude the Lazy Load page from favoriting**
(user-approved). `FavoriteToggle` is wired into `InventoryListItem.jsx`,
`InventoryItem.jsx`, and `DynamicCatalogItemCard.jsx` only as rendered
by the Spinner and Slider routes — not as rendered (via
`LazyCatalogCard`) by the Lazy Load route. All of those surfaces safely
share the same `InventoryData` id space. `LazyCatalogCard` passes a
prop (e.g. `showFavoriteToggle={false}`, default `true`) down to
`DynamicCatalogItemCard` so the card itself stays a single shared
component rather than forking into two. "Every catalog item" narrows
to exclude this one demo page's distinct dataset; its purpose is
demonstrating scroll-triggered loading, not being a second product
catalog.

## What's left to the builder

- Exact component split for the Cart Favorites row (a new small
  component vs. extending `CartItem` with a variant prop) — pick
  whichever reads cleaner against the existing `CartItem`
  implementation; this app's convention leans toward one
  small component per rendering context.
- Exact `localStorage` key name and CSS class names/pixel values for
  the new star icon and segmented control, matched to the existing
  design tokens already present in each touched `.css` file.
- Whether to add a Storybook story for the new `FavoriteToggle`
  component (recommended, matches existing convention for interactive
  components) and/or a WebdriverIO e2e spec under `test/e2e` for the
  favorites flow (this app has e2e coverage for its other core flows;
  consistency would suggest adding one, but it's not a hard
  requirement called out by the product ask).
- Full branch/line coverage for all new code, per the enforced 100%
  threshold — including the `Favorites` listener cleanup paths,
  favorited/unfavorited toggle states, the segmented filter
  interaction, and "Move to cart" leaving the item in Favorites.
