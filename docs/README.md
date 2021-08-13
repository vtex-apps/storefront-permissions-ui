# Storefront Permissions UI

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

The **Storefront Permissions UI** is the interface for the APP [`vtex.storefront-permissions`](https://github.com/vtex-apps/storefront-permissions)

![image](https://user-images.githubusercontent.com/24723/129122444-16069c74-fc7d-4944-9f78-94cd72dbb8ab.png)


## Functionalities

- Manage Roles
- Manage Users
- Manage theme blocks depending on user's role

## Configuration

1. [Install](https://vtex.io/docs/recipes/development/installing-an-app/) the storefront-permissions app by running `vtex install vtex.storefront-permissions-ui` in your terminal.
2. At the Admin, navigate to **ACCOUNT SETTINGS > Storefront Permissions**.

3. Create Users

### Theme configuration

To make use of the conditional blocks, you need to add `vtex.storefront-permissions-ui@0.x` under `peerDependencies` on the `manifest.json`

```diff
  "peerDependencies": {
+   "vtex.storefront-permissions-ui": "0.x"
  },
```

Now, you can make use of the interfaces `check-permission`, `allowed-content` and `disallowed-content` as the example bellow

```diff
{
  "store.home": {
    "blocks": [
+      "check-permission#carousel",
      "shelf#home",
      "info-card#home",
      "rich-text#question",
      "rich-text#link"
    ]
  },
+  "check-permission#carousel": {
+    "props": {
+      "roles": ["store-admin", "sales-admin"]
+    },
+    "blocks": ["allowed-content#carousel","disallowed-content#carousel"]
+  },
+  "allowed-content#carousel": {
+    "children": ["carousel#home"]
+  },
+  "disallowed-content#carousel": {
+    "children": ["rich-text#disallowed"]
+  },
+  "rich-text#disallowed": {
+    "props": {
+      "text": "**You don't have access to this content**"
+    }
+  },
  "carousel#home": {
    "props": {
      "autoPlay": false,
      "banners": [
        {
          "image": "https://storecomponents.vteximg.com.br/arquivos/banner-principal.png",
          "mobileImage": "https://storecomponents.vteximg.com.br/arquivos/banner-principal-mobile.jpg"
        },
        {
          "image": "https://storecomponents.vteximg.com.br/arquivos/banner.jpg",
          "mobileImage": "https://storecomponents.vteximg.com.br/arquivos/banner-principal-mobile.jpg"
        }
      ],
      "height": 720,
      "showArrows": true,
      "showDots": true
    }
  },
```

`check-permission` have a `props` **roles** which you can define an array of allowed roles to see the blocks defined under the children blocks of `allowed-content` you can also define the optional `disallowed-content` to show an alternative content to not allowed users

#### Props

Only `check-permission` block has props:

| Prop name       | Type      | Description                                         | Required | Example |
| --------------- | --------- | --------------------------------------------------- | -------- | ------- |
| `roles`          | `array of string`  | List of the allowed roles.                |  `true`  | ["store-admin", "sales-admin"] |

### Available Roles

| Role                 | Key                    |
| -------------------- | ---------------------- |
| Store Admin          | `store-admin`          |
| Sales Admin          | `sales-admin`          |
| Sales Manager        | `sales-manager`        |
| Sales Representative | `sales-representative` |
| Admin       | `customer-admin`       |
| Approver    | `customer-approver`    |
| Buyer       | `customer-buyer`       |
