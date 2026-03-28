# Episode 02 – Igniting Our App

This episode focuses on setting up a React project properly using **npm**, installing dependencies, and using **Parcel** as a bundler to build and run the application.

---

# NPM (Node Package Manager)

NPM is the default package manager for Node.js.

It helps developers:

- Install libraries and dependencies
- Manage project packages
- Run scripts defined inside `package.json`

Example command:

```bash
npm init
```

This command initializes a project and creates a **package.json** file.

---

# package.json

`package.json` is a configuration file that contains information about the project.

It includes:

- Project name
- Version
- Dependencies
- Scripts
- Metadata about the project

Example structure:

```json
{
  "name": "react-app",
  "version": "1.0.0",
  "scripts": {
    "test": "jest"
  }
}
```

The test command here uses **Jest**, which is commonly used for testing JavaScript applications.

---

# Bundlers

A bundler combines all project files into optimized bundles that browsers can load efficiently.

Examples of bundlers:

- Webpack
- Vite
- Parcel

In this project, we use **Parcel**.

---

# Installing Parcel

Parcel is installed using npm.

```bash
npm install -D parcel
```

Explanation:

`-D` installs Parcel as a **development dependency**.

After installing Parcel, a new file is created:

```
package-lock.json
```

This file locks dependency versions to ensure consistent installs across environments.

---

# Running the Application using Parcel

To start the development server:

```bash
npx parcel index.html
```

Explanation:

- `npx` executes packages without installing them globally
- Parcel starts a development server
- The application runs locally in the browser

This command performs a **development build**.

---

# Installing React as a Dependency

Using CDN is not recommended for production applications.

Instead, React should be installed using npm.

Install React:

```bash
npm install react
```

Install ReactDOM:

```bash
npm install react-dom
```

After installing React and ReactDOM:

- CDN links are no longer required
- React becomes a dependency of the project

---

# Importing React in the Application

Once React is installed via npm, it must be imported inside the JavaScript files.

Example:

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
```

Explanation:

Line 1 → Imports React core library  
Line 2 → Imports ReactDOM for rendering components to the DOM

If React is not imported, the error **"React is not defined"** will occur.

---

# Parcel Features

Parcel provides several useful features for development.

### Hot Module Replacement (HMR)

Parcel automatically refreshes the browser when code changes.

This allows developers to see changes instantly without manually refreshing the page.

---

### Parcel Cache

Parcel maintains a cache to speed up builds.

The cache stores processed files so they do not need to be rebuilt every time.

---

# Production Build

For production builds, run:

```bash
npx parcel build index.html
```

Explanation:

This command:

- Creates an optimized build
- Minifies JavaScript
- Optimizes assets

The final output is placed inside the **dist** folder.

---

# Dist Folder

After running the production build command, Parcel generates compiled files inside:

```
dist/
```

These files are optimized for production deployment.

---

# Browser Compatibility

To ensure the application works across different browsers, a configuration called **Browserslist** is used.

Browserslist helps tools determine which browsers should be supported.

It exists as a dependency inside:

```
node_modules
```

Example configuration:

```json
"browserslist": [
  "last 2 versions",
  "not dead"
]
```

This ensures compatibility with modern browsers.

---

# Key Takeaways

- NPM is used to manage dependencies in JavaScript projects.
- `package.json` stores project configuration and dependencies.
- Bundlers like **Parcel** bundle project files for the browser.
- React and ReactDOM should be installed using npm instead of CDN.
- Parcel provides **Hot Module Replacement** for faster development.
- Production builds are generated using `parcel build`.
- Optimized files are placed inside the **dist** folder.
```