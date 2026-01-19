# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Fixed

- French translations

## [3.0.2] - 2026-01-05

### Fixed

- Fix texts

## [3.0.1] - 2025-10-06

### Added
- Added buyer organization policy view and edit

## [3.0.0] - 2025-09-24

### Changed
- Update dependency major version. If you are updating to this major version, make sure to update the following apps (if you have then installed) to the following major versions:
    - vtex.b2b-admin-customers@2.x
    - vtex.b2b-checkout-settings@3.x
    - vtex.b2b-my-account@2.x
    - vtex.b2b-orders-history@2.x
    - vtex.b2b-organizations@3.x
    - vtex.b2b-organizations-graphql@2.x
    - vtex.b2b-quotes@3.x
    - vtex.b2b-quotes-graphql@4.x
    - vtex.b2b-suite@2.x
    - vtex.b2b-theme@5.x
    - vtex.storefront-permissions-components@2.x
    - vtex.storefront-permissions-ui@1.x

## [2.0.0] - 2025-05-27

### Changed
- Update dependency major version. If you are updating to this major version, make sure to update the following apps (if you have then installed) to the following major versions:
    - vtex.b2b-admin-customers@1.x
    - vtex.b2b-checkout-settings@2.x
    - vtex.b2b-my-account@1.x
    - vtex.b2b-orders-history@1.x
    - vtex.b2b-organizations@2.x
    - vtex.b2b-organizations-graphql@1.x
    - vtex.b2b-quotes@2.x
    - vtex.b2b-quotes-graphql@3.x
    - vtex.b2b-suite@1.x
    - vtex.b2b-theme@4.x
    - vtex.storefront-permissions@2.x
    - vtex.storefront-permissions-components@1.x

## [1.2.3] - 2025-05-21

### Fixed

- Updated pull request workflows
- Outdated image and path

## [1.2.2] - 2024-10-14

### Added
- Create a check organization permission component

## [1.2.1] - 2023-05-26

### Added
- Possible loading content while permissions are loaded.

## [1.2.0] - 2023-05-18

### Added
- Better communication on the roles categorization

### Removed
- [ENGINEERS-1247] - Disable cypress tests in PR level

## [1.1.1] - 2022-11-14

### Changed

- Run schedule job only on saturday

### Changed

- [ ENGINEERS-975 ] - Cypress improvements

### Fixed

- minimist package updated from 1.2.5 to 1.2.7 due a critical security vulnerability


### Changed

- Split bindings testcase into two files

### Changed

## [1.1.0] - 2022-07-12

### Added

- Bulgarian, Dutch, French, Italian, Japanese, Korean, Portuguese, Romanian, Spanish and Thai translations.

### Fixed

- English translations.

## [1.0.2] - 2022-07-04

### Added

- Initial Crowdin integration

### Fixed

- Updated README.md file with correct image links

## [1.0.1] - 2022-03-21

### Changed

- Updated README.md file

### Removed

- Credentials_LS.png, Defaults_LS.png, Flowchart_LS.png and Options_LS.png files in the docs/images folder

### Added

- storefront-permissions-ui.gif file in the docs/images folder


## [1.0.0] - 2022-02-17

### Changed

- Remove billing options

## [0.2.1] - 2021-11-22

### Fixed

- Menu navigation

## [0.2.0] - 2021-10-26

### Changed

- Default route to `roles/list

### Removed

- Tabs

## [0.1.2] - 2021-09-07

### Fixed

- Logged out users not loading `check-permission`

## [0.1.1] - 2021-08-13

### Fixed

- Not loading `checkUserPermission`

## [0.1.0] - 2021-08-13

### Added

- blocks `check-permission`, `allowed-content` and `disallowed-content`

## [0.0.1] - 2021-08-11

### Added

- Initial version of the alternative interface for `vtex.storefront-permissions`
