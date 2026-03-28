# Episode 06 – Exploring the World (Fetching Data & useEffect)

In this episode we learn how to **fetch data dynamically from an API**, render it in the UI, and understand **useEffect()** and **state updates in React**.

---

# Fetching Data from Backend

In real applications, data usually comes from a **backend server or API**.

Example: Restaurant data from Swiggy.

We fetch the data and render it dynamically in the UI.
---

# Two Approaches to Fetch Data

### Approach 1

```
App loads
→ Fetch data from backend
→ Render UI
```

The UI will wait until the data arrives.

---

### Approach 2 (Used in React)

```
App loads
→ UI renders immediately
→ Fetch backend data
→ Re-render UI with fetched data
```

React always follows this **second approach**.

Even though the UI renders twice, React's rendering cycle is very efficient.

---

# useEffect Hook

To implement the second approach we use **useEffect()**.

Important concept:

```
Hooks are just JavaScript functions
```

Example:

```javascript
useEffect(() => {
  fetchData();
}, []);
```

useEffect takes **two arguments**:

```
1. Callback function
2. Dependency array
```

---

# When does useEffect run?

The callback function inside useEffect runs **after the component renders**.

Example:

```javascript
useEffect(() => {
  console.log("Component rendered");
}, []);
```

So if something must happen **after rendering**, we use `useEffect()`.

---

# Fetching Data inside useEffect

Example:

```javascript
useEffect(() => {
  fetchData();
}, []);
```

Here the `fetchData()` function calls the API.

Example:

```javascript
const fetchData = async () => {
  const data = await fetch("API_URL");
  const json = await data.json();
};
```

---

# Using a Node Server for API

Instead of calling the Swiggy API directly, a **Node.js server endpoint** can be used.

Example:

```
React App → Local Node Server → Swiggy API
```

This helps avoid CORS issues.

---

# Updating State with API Data

After fetching data, we update the state variable.

Example:

```javascript
setListOfRestaurants(json.data);
```

Once the state is updated:

```
React re-renders the component
```

---

# Initial Empty State

Initially the state variable is set to:

```javascript
useState([])
```

Because of this:

```
The UI first renders an empty body component
```

Then after the API response arrives:

```
State updates
→ Component re-renders
→ Restaurants appear
```

---

# Loading UI

When no data is available, we show a loading state.

Example:

```javascript
if (listOfRestaurants.length === 0) {
  return <h1>Loading...</h1>;
}
```

This prevents the UI from breaking.

---

# Shimmer UI

Instead of showing text like "Loading...", modern apps use **Shimmer UI**.

Shimmer UI shows a placeholder layout until real data arrives.

Example:

```
Loading cards that look like restaurant cards
```

---

# Conditional Rendering

Conditional rendering is commonly done using a **ternary operator**.

Example:

```javascript
return listOfRestaurants.length === 0 ? (
  <Shimmer />
) : (
  <RestaurantList />
);
```

---

# Why Normal JavaScript Variables Don't Work

Example login/logout button:

```javascript
let btnName = "Login";
```

When the button is clicked:

```
btnName = "Logout"
```

Even though the variable changes:

```
UI DOES NOT UPDATE
```

Because React does not track normal variables.

---

# Using State for UI Updates

Instead we use state variables.

Example:

```javascript
const [btnName, setBtnName] = useState("Login");
```

On button click:

```javascript
setBtnName("Logout");
```

Now React:

```
Updates state
→ Re-renders component
→ UI updates
```

---

# Important Concept: Re-rendering

Whenever a **state variable changes**:

```
React re-renders the component
```

Important:

```
React re-renders the entire component,
not just the updated variable.
```

Example:

```
Header component re-renders
when login/logout state changes.
```

React internally handles:

```
Virtual DOM
Diffing
Reconciliation
```

to update only necessary DOM elements.

---

# Why useState works with const

Example:

```javascript
const [btnName, setBtnName] = useState("Login");
```

Even though `btnName` is declared with `const`, it works because:

```
React re-executes the component function on every render.
```

Each render creates a **new state variable internally**.

---

# Search Functionality

Next we implement search functionality.

We track the input value using a state variable.

Example:

```javascript
const [searchText, setSearchText] = useState("");
```

---

# Binding Input Value

Example:

```javascript
<input value={searchText} />
```

This binds the input field to the state variable.

---

# Why Input Doesn't Work Initially

If we only write:

```javascript
<input value={searchText} />
```

The input field becomes **read-only**.

Because React always keeps the value equal to the state.

---

# Fix Using onChange

We update the state when the user types.

Example:

```javascript
<input
  value={searchText}
  onChange={(e) => {
    setSearchText(e.target.value);
  }}
/>
```

Now typing updates the state variable.

---

# Re-rendering During Typing

Every time the user types:

```
State updates
→ Component re-renders
```

You can see this in the console if you log inside the component.

Example:

```
Body component re-rendered
```

This will happen for **every keystroke**.

---

# Key Takeaways

• Real applications fetch data from APIs  
• React renders UI first, then fetches data  
• useEffect is used to run code after rendering  
• useState stores dynamic data  
• Updating state triggers re-rendering  
• Conditional rendering helps handle loading states  
• Controlled inputs require value + onChange  
• React efficiently updates UI using Virtual DOM