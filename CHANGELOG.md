# Changelog

## Breaking changes
- all pages after login validate if the user has been logged in by validating the `sessionStorage` prop `session-username`. If this is not a valid user the page will redirect to the login page.
