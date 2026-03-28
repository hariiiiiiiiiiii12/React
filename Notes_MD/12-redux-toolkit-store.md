# Episode 12 – Let's Build Our Store (Redux Toolkit)

In this episode we learn **state management using Redux Toolkit** and integrate it with our React application.

We will build a **Cart feature** where clicking **Add** adds items to the cart and displays the total items in the header.

---

# Redux Overview

Important points:

```
Redux is NOT mandatory for React.
Redux and React are two separate libraries.
```

Redux is simply a **state management library**.

Other alternatives include:

```
Zustand
MobX
Recoil
```

One advantage of Redux is **powerful debugging using Redux DevTools**.

---

# Redux Packages Used

We use two packages:

```
1. Redux Toolkit
2. React Redux
```

Redux Toolkit → Core Redux logic  
React Redux → Bridge between React and Redux

---

# What is a Redux Store?

Redux Store is a **central global object** that holds application state.

Example:

```
Redux Store
   ├── cart slice
   ├── user slice
   └── other slices
```

Every component can:

```
Read data from store
Write data to store
```

---

# Slices

Instead of one huge object, Redux splits the store into **logical parts called slices**.

Example:

```
cartSlice
userSlice
themeSlice
```

Example cart slice:

```
cart: {
   items: []
}
```

Initially the cart is an **empty array**.

---

# Writing Data to Redux Store

Redux does not allow direct modification of state.

Incorrect:

```
store.cart.items.push(item)
```

Instead Redux follows a pattern.

Flow:

```
User action
→ Dispatch Action
→ Reducer function runs
→ Slice updated
```

---

# Redux Flow

Example:

```
Add Button Click
→ dispatch(addItem())
→ reducer updates state
→ store updated
```

Reducer functions modify the state.

---

# Reading Data from Store

To read data we use **Selectors**.

Selectors subscribe to the store.

Example:

```
Component subscribes to store
If store changes → component re-renders
```

---

# Creating Redux Store

Redux Toolkit provides `configureStore()`.

Example:

```javascript
import { configureStore } from "@reduxjs/toolkit";

const appStore = configureStore({
  reducer: {}
});

export default appStore;
```

This creates the **central store for the application**.

---

# Providing Store to React App

React Redux provides `Provider`.

Example:

```javascript
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

<Provider store={appStore}>
   <App />
</Provider>
```

Provider connects React with Redux.

---

# Creating a Cart Slice

Redux Toolkit provides `createSlice()`.

Example:

```javascript
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    }
  }
});
```

Explanation:

```
name → slice name
initialState → default state
reducers → functions that modify state
```

---

# Exporting Actions and Reducers

Example:

```javascript
export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
```

Redux Toolkit automatically generates action creators.

---

# Adding Slice to Store

Example:

```javascript
const appStore = configureStore({
  reducer: {
    cart: cartReducer
  }
});
```

Now the store contains:

```
store.cart
```

---

# Reading Data using useSelector

To access store data we use:

```javascript
useSelector()
```

Example:

```javascript
import { useSelector } from "react-redux";

const cartItems = useSelector((store) => store.cart.items);
```

Now the component subscribes to the store.

If cart items change → component re-renders.

---

# Dispatching Actions

To write data to the store we use `useDispatch`.

Example:

```javascript
import { useDispatch } from "react-redux";

const dispatch = useDispatch();
```

Dispatch action:

```javascript
dispatch(addItem(item));
```

`item` becomes:

```
action.payload
```

inside the reducer.

---

# Example Cart Flow

When the Add button is clicked:

```
dispatch(addItem(item))
```

Reducer runs:

```
state.items.push(item)
```

Store updates.

Components subscribed to cart items update automatically.

---

# Display Cart Count

Example in Header component:

```javascript
const cartItems = useSelector((store) => store.cart.items);

<h1>Cart ({cartItems.length})</h1>
```

Now the header updates whenever items are added.

---

# Building Cart Page

Cart page reads data from the store.

Example:

```javascript
const cartItems = useSelector((store) => store.cart.items);
```

Display all cart items.

---

# Clear Cart Feature

Reducer example:

```javascript
clearCart: (state) => {
  state.items.length = 0;
}
```

Dispatch:

```javascript
dispatch(clearCart());
```

---

# Redux Performance Tip

Bad example:

```javascript
const store = useSelector((store) => store);
```

This subscribes to the **entire store**.

Whenever anything changes → component re-renders.

Better example:

```javascript
const cartItems = useSelector((store) => store.cart.items);
```

Now the component updates **only when cart items change**.

---

# Important Redux Concepts

Reducers exist at two levels:

```
Store reducer
Slice reducers
```

Store reducer combines multiple slice reducers.

---

# State Mutation in Redux Toolkit

In older Redux:

```
Direct mutation was not allowed
```

Example:

```
state.items.push(item)
```

Redux Toolkit uses **Immer internally**, which allows mutation-like syntax safely.

---

# Key Takeaways

• Redux is a state management library  
• Redux Toolkit simplifies Redux usage  
• Store is a global object storing application state  
• State is divided into slices  
• Dispatch triggers reducers  
• Reducers update slices  
• useSelector reads store data  
• useDispatch sends actions  
• Components subscribed to store update automatically