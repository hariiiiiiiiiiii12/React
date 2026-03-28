# Episode 05 – Let's Get Hooked

This episode focuses on **code organization, exports/imports, and introducing React Hooks (useState)**. It explains how React manages dynamic UI updates using state variables.

---

# React vs Traditional Web Development

Important concept:

```
Everything that can be done using React can also be done using HTML, CSS, and JavaScript.
```

React simply makes it **easier to build and manage complex UI applications**.

---

# Project Folder Structure

To organize code better, the application files are structured into folders.

Example structure:

```
src/
 ├── App.js
 ├── components/
 │     ├── Header.js
 │     ├── Body.js
 │     ├── RestaurantCard.js
 │     └── Footer.js
 └── utils/
       └── mockData.js
```

Important change:

```
App.js was moved into the src folder
```

The script path inside `index.html` was updated accordingly.

---

# Creating Separate Files for Components

Instead of writing all components in one file, each component should be placed in its **own file**.

Example:

```
Header.js
Body.js
RestaurantCard.js
Footer.js
```

This improves **code readability and maintainability**.

---

# Exporting Components

Example Header component:

```javascript
const Header = () => {
  return (
    <div className="header">
      <h1>Food Ordering App</h1>
    </div>
  );
};

export default Header;
```

Here we export the component so it can be used in other files.

---

# Importing Components

Example inside `App.js`:

```javascript
import Header from "./components/Header";
```

Now the component can be used:

```jsx
<Header />
```

---

# Types of Export in JavaScript

There are **two types of exports**.

```
1. Default Export
2. Named Export
```

---

# Default Export

A file can have **only one default export**.

Example:

```javascript
export default Header;
```

Import:

```javascript
import Header from "./Header";
```

---

# Named Export

Named exports allow multiple exports from a file.

Example:

```javascript
export const CDN_URL = "image-url";
export const LOGO_URL = "logo-url";
```

Import:

```javascript
import { CDN_URL, LOGO_URL } from "../utils/constants";
```

Important rule:

```
Named imports use curly braces {}
```

---

# Utils Folder

Hardcoded data such as restaurant lists are stored inside a **utils folder**.

Example:

```
utils/mockData.js
```

This keeps the code clean and separates data from UI components.

---

# Introducing React Hooks

React Hooks allow functional components to use **state and other React features**.

Important concept:

```
React Hooks are just JavaScript functions
```

Two very important hooks:

```
useState()
useEffect()
```

---

# useState Hook

`useState` is used to create **state variables**.

State variables store **dynamic data that can change over time**.

Example:

```javascript
import { useState } from "react";

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([]);

};
```

Explanation:

```
listOfRestaurants → state variable
setListOfRestaurants → function to update the state
[] → default value
```

---

# Default State Value

The value inside `useState()` is the **initial value** of the state.

Example:

```javascript
useState([])
```

This means the initial value of the state variable is an **empty array**.

---

# Why State Variables Are Needed

Suppose we store restaurant data in a normal variable:

```javascript
let listOfRestaurants = [];
```

If we modify it, **React will NOT update the UI**.

But if we use a state variable:

```javascript
const [listOfRestaurants, setListOfRestaurants] = useState([]);
```

React will automatically update the UI whenever the state changes.

---

# Important Rule of State

State variables **cannot be modified directly**.

Incorrect:

```javascript
listOfRestaurants = newData;
```

Correct:

```javascript
setListOfRestaurants(newData);
```

The setter function must always be used.

---

# Updating the UI with State

Whenever the setter function is called:

```javascript
setListOfRestaurants(filteredData);
```

React automatically:

```
Re-renders the component
```

This keeps the **UI layer synchronized with the data layer**.

---

# Creating a Filter Button

Example:

```javascript
<button
  onClick={() => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.rating > 4
    );

    setListOfRestaurants(filteredList);
  }}
>
  Top Rated Restaurants
</button>
```

When the button is clicked:

1. Restaurants are filtered.
2. The state variable is updated.
3. React re-renders the UI.

---

# Initial Rendering of Restaurants

Initially all restaurants are displayed.

Later the **filter button modifies the state**, which updates the UI.

Example:

```
Initial → 3 restaurants
After filter → 2 restaurants
```

---

# Key Takeaways

• React applications should be organized into folders and separate component files  
• Components can be exported and imported between files  
• JavaScript supports default and named exports  
• React Hooks are JavaScript functions that add extra functionality to components  
• useState creates state variables  
• State variables allow React to track and update UI dynamically  
• Updating state automatically triggers a component re-render