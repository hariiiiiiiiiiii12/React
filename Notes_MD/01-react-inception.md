# Episode 01 – Inception

These notes explain the basics of rendering UI using HTML, JavaScript, and React. It introduces React CDN, React Elements, ReactDOM, and JSX.

---

# Hello World using HTML

The simplest way to render something in a browser is using HTML.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello World</title>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
```

This directly renders an `<h1>` element in the browser.

---

# Hello World using JavaScript

Instead of writing HTML directly, JavaScript can dynamically create elements.

```javascript
const heading = document.createElement("h1");
heading.innerHTML = "Hello World from JavaScript";

const root = document.getElementById("root");
root.appendChild(heading);
```

Explanation:

1. JavaScript creates an `h1` element.
2. The text is inserted into the element.
3. The element is appended to the DOM.

---

# Hello World using React

React allows us to create UI elements using JavaScript.

Before using React, we must inject React into the project using CDN.

```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>

<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

Explanation:

React CDN  
Provides the core React functionality.

ReactDOM CDN  
Responsible for interacting with the browser DOM.

After adding these scripts, React becomes available globally.

---

# Creating Elements using React

React elements are created using:

```
React.createElement()
```

Example:

```javascript
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
);
```

Structure:

```
React.createElement(
  type,
  props,
  children
)
```

Example breakdown:

```
type → "h1"
props → { id: "heading" }
children → "Hello World from React"
```

Props include both **attributes and children**.

---

# Important Concept – React Elements

Very important concept:

```
React.createElement() does NOT return an HTML element.
```

Instead it returns:

```
A JavaScript Object
```

This object is called a **React Element**.

So:

```
React Element = JavaScript Object
```

React later converts this object into actual DOM elements.

---

# Example Structure of a React Element

```javascript
{
  type: "h1",
  props: {
    id: "heading",
    children: "Hello World"
  }
}
```

React converts this object into a real DOM element.

---

# Rendering React Elements

To render a React element:

```javascript
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
```

Steps involved:

1. React creates a **React Element (object)**.
2. ReactDOM converts the object into **actual DOM nodes**.
3. The element is rendered inside the **root container**.

---

# Root Replacement Behavior

If something already exists inside the root element:

```html
<div id="root">
  Akshay is here
</div>
```

Then React will replace it when rendering:

```javascript
root.render(heading);
```

However, the original content may appear for a **fraction of a second** before React replaces it.

---

# Script Order Matters

The order of scripts is important.

Incorrect order:

```html
<script src="./App.js"></script>
<script src="react-cdn"></script>
```

This causes an error because React is used before React is loaded.

Correct order:

```html
<script src="react-cdn"></script>
<script src="./App.js"></script>
```

React must load **before any script that uses React**.

---

# Limitation of React.createElement()

For complex UI structures, `React.createElement()` becomes difficult to read.

Example:

```javascript
React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "Hello")
);
```

This quickly becomes messy for large applications.

---

# JSX – The Solution

JSX simplifies UI creation.

Instead of writing:

```javascript
React.createElement("h1", {}, "Hello World")
```

We can write:

```jsx
const heading = <h1>Hello World</h1>;
```

JSX looks like HTML but is actually JavaScript.

JSX is later converted into `React.createElement()` calls by Babel.

---

# Key Takeaways

• React is a **JavaScript library for building user interfaces**  
• React elements are **JavaScript objects**  
• `React.createElement()` creates React elements  
• ReactDOM renders elements to the DOM  
• Script order matters when using React with CDN  
• JSX simplifies UI development