# Changelog

## Breaking changes
**Login**
- ID of the username input field changed from `#user-name` to `#username`

**Header**
- the shopping cart had a container with the `id: shopping_cart_container` and a class called `class: shopping_cart_container`. These have been removed.

**Generic**
- all pages after login validate if the user has been logged in by validating the `sessionStorage` prop `session-username`. If this is not a valid user the page will redirect to the login page.
- Automating IE11 with Selenium will _break_ some features. IE11 is not the best browser to do the automation with. An example is the triggering of `onChange` events in IE11 with Selenium. This doesn't work how it should. See [here](https://stackoverflow.com/questions/55653710/why-is-reacts-onchange-event-not-fired-on-selenium-webdrivers-sendkeys-in-ie-1) for a detailed explanation  
