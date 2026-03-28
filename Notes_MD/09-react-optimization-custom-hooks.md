# Episode 09 – Optimizing Our App (Custom Hooks & Code Splitting)

In this episode we learn how to **optimize React applications** by creating **custom hooks**, applying the **Single Responsibility Principle**, and improving performance using **code splitting and lazy loading**.

---

# Writing Clean and Modular Code

One important goal while building applications is to keep the code **clean, modular, and maintainable**.

A major principle used here is:

```
Single Responsibility Principle
```

This means:

```
A component should ideally do only one job.
```

Example:

The `RestaurantMenu` component should only **display menu data**, not fetch it.

However, previously it was doing both:

```
1. Fetching menu data
2. Rendering menu data
```

To fix this, we move the data-fetching logic into a **custom hook**.

---

# Custom Hooks

Custom hooks are **reusable JavaScript functions that use React hooks internally**.

They help extract logic from components.

Important rule:

```
Custom hooks must always start with "use"
```

Example:

```
useRestaurantMenu()
useOnlineStatus()
```

Custom hooks are usually placed inside the **utils folder**.

---

# Creating a Custom Hook

Example: `useRestaurantMenu`

File location:

```
src/utils/useRestaurantMenu.js
```

Example:

```javascript
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {

  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch("API_URL/" + resId);
    const json = await data.json();
    setResInfo(json);
  };

  return resInfo;
};

export default useRestaurantMenu;
```

This hook handles:

```
Fetching data
Managing state
Returning fetched data
```

---

# Using the Custom Hook

Inside `RestaurantMenu` component:

```javascript
const RestaurantMenu = () => {

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

};
```

Now the component **does not worry about fetching data**.

It only focuses on **displaying data**.

---

# Another Custom Hook Example

We can also create a hook to check if the user is online.

Example:

```
useOnlineStatus()
```

Example implementation:

```javascript
import { useEffect, useState } from "react";

const useOnlineStatus = () => {

  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });

    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

  }, []);

  return onlineStatus;

};

export default useOnlineStatus;
```

Now components can easily check internet status.

Example:

```javascript
const onlineStatus = useOnlineStatus();
```

---

# Bundling Problem

Parcel bundles all application files into a **single JavaScript file**.

Example:

```
main.js
```

Problem:

```
As the application grows, the JS file becomes very large.
```

Large JS bundles slow down application loading.

---

# Solution – Code Splitting

Instead of one huge bundle, we create **multiple smaller bundles**.

Example:

```
Food Delivery Bundle
Grocery Bundle
Flights Bundle
```

Each feature loads only when required.

This concept is called:

```
Code Splitting
```

Also known as:

```
Chunking
Dynamic Bundling
Lazy Loading
```

---

# Example Scenario

Suppose the application supports:

```
Food Delivery
Grocery Delivery
```

If grocery components are bundled together with the main bundle:

```
Users downloading food app will also download grocery code unnecessarily.
```

Instead we load grocery code **only when the grocery page is visited**.

---

# Lazy Loading

React provides lazy loading to load components **on demand**.

Example:

```javascript
import { lazy } from "react";

const Grocery = lazy(() => import("./components/Grocery"));
```

This tells React:

```
Do not load Grocery component immediately.
Load it only when required.
```

---

# Problem with Lazy Loading

React may try to render the component **before the JS file arrives**.

This causes an error.

---

# Solution – Suspense

To handle this, React provides **Suspense**.

Example:

```javascript
import { Suspense } from "react";

<Suspense fallback={<h1>Loading...</h1>}>
  <Grocery />
</Suspense>
```

Explanation:

```
fallback → UI shown while the component is loading
```

So until the Grocery JS file loads, React shows:

```
Loading...
```

---

# Result

Before visiting the Grocery page:

```
1 JS file loaded
```

After visiting Grocery page:

```
2 JS files loaded
```

The second bundle contains **only the grocery code**.

---

# Benefits of Code Splitting

Advantages:

```
Faster initial load
Better performance
Smaller bundle size
Improved user experience
```

---

# Key Takeaways

• Custom hooks help extract reusable logic  
• Hooks are simply JavaScript functions  
• Custom hooks should start with "use"  
• Components should follow Single Responsibility Principle  
• Bundling everything into one JS file increases bundle size  
• Code splitting divides code into smaller bundles  
• Lazy loading loads components only when needed  
• Suspense handles loading state during lazy loading