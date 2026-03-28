# Episode 10 – Jo Dikhta Hai, Vo Bikta Hai (Tailwind CSS)

In this episode we learn how to style React applications using **Tailwind CSS**, a modern CSS framework that allows styling directly inside HTML/JSX using utility classes.

---

# CSS Frameworks

A **CSS framework** provides pre-written styles and utilities that help developers design UI quickly.

Previously we used CSS like this:

```css
.header {
  display: flex;
  justify-content: space-between;
}
```

Then applied it in JSX:

```jsx
<div className="header"></div>
```

However, modern development prefers more **utility-based styling approaches**.

---

# Styled Components vs Utility Frameworks

Some modern styling approaches include:

```
Styled Components
Tailwind CSS
```

In this episode we focus on **Tailwind CSS**.

---

# What is Tailwind CSS?

Tailwind CSS is a **utility-first CSS framework**.

Instead of writing CSS rules, we apply **predefined utility classes directly in JSX**.

Example:

```jsx
<div className="flex justify-between p-4">
  <h1>Logo</h1>
  <ul className="flex">
    <li>Home</li>
    <li>About</li>
  </ul>
</div>
```

Each class performs a small styling task.

Example:

```
flex → display:flex
p-4 → padding
justify-between → space between items
```

---

# Installing Tailwind with Parcel

Tailwind can be configured in a React project using **Parcel bundler**.

Steps include:

1. Install Tailwind CSS
2. Configure Tailwind
3. Add Tailwind directives in CSS

However, after setup we mostly **stop writing CSS manually**.

---

# Removing Existing CSS

Previously we wrote styles in `index.css`.

Example:

```css
.header {
  background-color: #f0f0f0;
}
```

With Tailwind we can remove most custom CSS.

Example:

```
Delete most styles from index.css
```

Because Tailwind provides **prebuilt utility classes**.

---

# Using Tailwind Classes

Example Header layout:

```jsx
<div className="flex justify-between items-center bg-gray-100 p-4">
  <img
    className="w-24"
    src="logo.png"
  />

  <ul className="flex gap-4">
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
</div>
```

Explanation:

```
flex → makes layout flexible
justify-between → spreads elements apart
items-center → vertical alignment
bg-gray-100 → background color
p-4 → padding
w-24 → width
gap-4 → spacing between items
```

---

# Styling Restaurant Cards

Example:

```jsx
<div className="m-4 p-4 w-60 bg-gray-100 rounded-lg">
  <img
    className="rounded-lg"
    src="restaurant.jpg"
  />

  <h3 className="font-bold py-2">
    Meghna Foods
  </h3>

  <p>Biryani, South Indian</p>
</div>
```

Tailwind utilities control spacing, colors, and layout.

---

# Responsive Styling

Tailwind also supports **responsive design** easily.

Example:

```jsx
<div className="w-full md:w-1/2 lg:w-1/3">
```

Meaning:

```
Mobile → full width
Medium screen → half width
Large screen → one third width
```

---

# Tailwind VS Code Extension

For better developer experience, install:

```
Tailwind CSS IntelliSense
```

This extension provides:

```
Auto suggestions
Class validation
Syntax highlighting
```

---

# Advantages of Tailwind

Benefits include:

```
Fast UI development
No need to switch between CSS and JSX
Highly reusable utility classes
Better maintainability
```

---

# Key Takeaways

• Tailwind CSS is a utility-first CSS framework  
• Styling is applied directly using utility classes  
• Reduces the need for custom CSS files  
• Works well with React and modern frameworks  
• Supports responsive design easily  
• Tailwind IntelliSense improves developer productivity