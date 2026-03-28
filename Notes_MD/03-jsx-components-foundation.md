# Episode 03 – Laying the Foundation

This episode explains **JSX, Babel, React Elements, and React Components**. It also introduces **Functional Components and Component Composition**.

---

# JSX and Browsers

Very important concept:

```
Browsers DO NOT understand JSX
```

JSX needs to be converted into normal JavaScript before the browser can execute it.

Parcel helps with this process.

Parcel internally uses **Babel** to convert JSX into code that browsers can understand.

---

# What is Babel?

Babel is a **JavaScript compiler**.

It converts:

```
Modern JavaScript + JSX
```

into:

```
Browser compatible JavaScript
```

Example:

JSX code:

```jsx
const heading = <h1>Hello World</h1>;
```

Babel converts it to:

```javascript
const heading = React.createElement("h1", {}, "Hello World");
```

So internally:

```
JSX → Babel → React.createElement()
```

---

# React Elements

React Elements are **not HTML elements**.

Very important:

```
React Elements = JavaScript Objects
```

Example:

```javascript
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World"
);
```

When React renders this element into the DOM, it becomes an **actual HTML element**.

---

# JSX is NOT HTML

Important concepts:

```
JSX is not HTML
JSX is not HTML inside JavaScript
JSX is JavaScript syntax
```

JSX simply makes writing UI easier.

All React applications **can be built without JSX**, but JSX makes development much easier.

---

# JSX Syntax Rules

### className instead of class

In JSX we use:

```jsx
className="container"
```

instead of:

```html
class="container"
```

This is because **class is a reserved keyword in JavaScript**.

React converts `className` into `class` when rendering.

---

### CamelCase attributes

JSX follows camelCase naming.

Example:

```jsx
tabIndex
onClick
className
```

---

### Multi-line JSX

Multi-line JSX must be wrapped inside parentheses.

Example:

```jsx
const heading = (
  <div>
    <h1>Hello World</h1>
  </div>
);
```

---

# React Components

There are two types of components:

```
1. Class Based Components
2. Functional Components
```

In modern React, **functional components are mostly used**.

---

# Functional Components

A functional component is simply a **JavaScript function that returns JSX**.

Example:

```javascript
function Title() {
  return <h1>Hello React</h1>;
}
```

or using arrow functions:

```javascript
const Title = () => {
  return <h1>Hello React</h1>;
};
```

Important rule:

```
Component names must start with a Capital Letter
```

---

# Rendering React Components

React components cannot be rendered like normal functions.

Incorrect:

```javascript
root.render(Title);
```

Correct:

```jsx
root.render(<Title />);
```

React components must be rendered using **JSX syntax**.

---

# React Element vs React Component

React Element:

```javascript
const element = <h1>Hello</h1>;
```

React Component:

```javascript
const Title = () => <h1>Hello</h1>;
```

Difference:

```
React Element → JavaScript Object
React Component → JavaScript Function returning JSX
```

---

# Component Composition

Component composition means **using one component inside another component**.

Example:

```javascript
const Title = () => <h1>Hello React</h1>;

const Heading = () => (
  <div>
    <Title />
    <h2>This is a heading component</h2>
  </div>
);
```

Here the **Title component is used inside Heading component**.

---

# Using JavaScript inside JSX

Inside JSX, we can write JavaScript using `{}`.

Example:

```jsx
const name = "React";

const Heading = () => (
  <h1>Hello {name}</h1>
);
```

Anything inside `{}` is treated as JavaScript.

---

# Calling Components like Functions

Since components are JavaScript functions, they can also be called inside JSX.

Example:

```jsx
const Title = () => <h1>Hello React</h1>;

const Heading = () => (
  <div>
    {Title()}
  </div>
);
```

However, the recommended way is:

```jsx
<Title />
```

---

# Using React Elements inside Components

Example:

```javascript
const title = <h1>Hello React</h1>;

const Heading = () => (
  <div>
    {title}
  </div>
);
```

Here a React element is used inside a component.

---

# JSX Prevents Cross-Site Scripting

JSX automatically escapes malicious scripts.

Example:

If user input contains:

```html
<script>alert("XSS")</script>
```

React will escape it instead of executing it.

This protects applications from **Cross-Site Scripting (XSS)** attacks.

---

# Key Takeaways

• Browsers do not understand JSX directly  
• Babel converts JSX into React.createElement()  
• React Elements are JavaScript objects  
• JSX simplifies writing UI  
• Functional components are JavaScript functions returning JSX  
• Component composition allows combining multiple components  
• JavaScript can be written inside JSX using `{}`  
• JSX helps prevent XSS attacks