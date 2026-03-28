# Episode 07 – Finding the Path (Routing in React)

In this episode we learn how **routing works in React** using the **react-router-dom** library.  
We also learn about **useEffect dependency array behavior, nested routes, Outlet, Link, and dynamic routing**.

---

# useEffect Dependency Array Behavior

### Case 1 – No Dependency Array

```javascript
useEffect(() => {
  console.log("useEffect called");
});
```

If there is **no dependency array**, useEffect runs **after every render**.

Example:

When the Login button is clicked → Header component re-renders → useEffect runs again.

---

### Case 2 – Empty Dependency Array

```javascript
useEffect(() => {
  console.log("useEffect called");
}, []);
```

If the dependency array is **empty**, useEffect runs **only once after the initial render**.

Important:

```
Header function runs on every re-render,
but useEffect runs only once.
```

---

### Case 3 – Dependency Variable

```javascript
useEffect(() => {
  console.log("btnNameReact updated");
}, [btnNameReact]);
```

If a variable is present in the dependency array:

```
useEffect runs every time that variable changes
```

Example:

When `btnNameReact` changes → useEffect runs again.

---

# Rules of Hooks

### 1. Never create state variables outside components

Incorrect:

```javascript
const [count, setCount] = useState(0);
```

outside the component.

Reason:

```
useState creates LOCAL STATE variables for that component.
```

---

### 2. Always place hooks at the top of the component

Example:

```javascript
function Header() {

  const [btnName, setBtnName] = useState("Login");

  return <div>Header</div>;
}
```

Hooks should always be declared **at the beginning of the component**.

---

### 3. Never use hooks inside conditions

Incorrect:

```javascript
if (condition) {
  useState();
}
```

---

### 4. Never use hooks inside functions

Incorrect:

```javascript
function test() {
  useState();
}
```

Hooks must always be used **inside React functional components**.

---

# React Router

To implement routing we use the **react-router-dom library**.

Installation:

```bash
npm install react-router-dom
```

This library helps create **multiple pages inside a React application**.

---

# Creating an About Page

First we create a component.

Example:

```javascript
const About = () => {
  return (
    <div>
      <h1>About Us</h1>
    </div>
  );
};
```

---

# Routing Configuration

Routing configuration is created using:

```javascript
createBrowserRouter()
```

Example:

```javascript
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />
  },
  {
    path: "/about",
    element: <About />
  }
]);
```

`createBrowserRouter()` takes a **list of route configurations**.

---

# RouterProvider

The router configuration must be passed to **RouterProvider**.

Example:

```javascript
<RouterProvider router={appRouter} />
```

Now instead of rendering `AppLayout` directly, we render:

```javascript
root.render(<RouterProvider router={appRouter} />);
```

---

# Contact Page

Create another component:

```javascript
const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
    </div>
  );
};
```

---

# Error Page

If the user enters a random URL, React Router shows an error.

We can create a custom error page.

Example:

```javascript
const Error = () => {
  return <h1>Oops! Page not found</h1>;
};
```

Then configure:

```javascript
errorElement: <Error />
```

---

# useRouteError Hook

To get more information about errors we can use:

```javascript
useRouteError()
```

Example:

```javascript
const error = useRouteError();
```

This helps display error details.

---

# Problem: Header Disappears When Navigating

When we navigate to `/about`:

```
Header disappears
Footer disappears
```

This happens because only the new route component is rendered.

Ideally:

```
Header
Body (changes based on route)
Footer
```

---

# Nested Routes (Children Routes)

To solve this we create **child routes**.

Example:

```javascript
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  }
]);
```

Now About and Contact become **children of AppLayout**.

---

# Outlet Component

`Outlet` is used to render child routes.

Example:

```javascript
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
```

When the path changes:

```
Outlet loads the corresponding child component.
```

Example:

```
/about → About component inside Outlet
/contact → Contact component inside Outlet
```

Header remains intact.

---

# Navigation Using Link

In React we **never use anchor tags** for routing.

Incorrect:

```html
<a href="/about">About</a>
```

Because this refreshes the entire page.

Instead we use:

```javascript
import { Link } from "react-router-dom";

<Link to="/about">About</Link>
```

Link allows navigation **without refreshing the page**.

---

# Why React is Called SPA

React applications are called **Single Page Applications (SPA)**.

Reason:

```
The page does not reload.
Only components update.
```

---

# Dynamic Routing

Now we create different pages for different restaurants.

Example route:

```javascript
{
  path: "/restaurant/:resId",
  element: <RestaurantMenu />
}
```

`:resId` is a **dynamic parameter**.

---

# Reading Route Parameters

To read the parameter we use:

```javascript
useParams()
```

Example:

```javascript
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

  const { resId } = useParams();

  console.log(resId);
};
```

Now we can fetch data based on the restaurant ID.

---

# Making Restaurant Cards Clickable

Each restaurant card should navigate to its menu page.

Example:

```javascript
<Link to={"/restaurant/" + restaurant.id}>
  <RestaurantCard resData={restaurant} />
</Link>
```

Important rule:

```
Key should be placed on the parent JSX element.
```

Example:

```javascript
<Link key={restaurant.id} to={"/restaurant/" + restaurant.id}>
```

---

# How Link Works Internally

In the browser, `Link` becomes an anchor tag.

However:

```
Link is a wrapper around the anchor tag.
```

React Router intercepts navigation and prevents page refresh.

---

# Key Takeaways

• useEffect behavior depends on dependency array  
• Hooks must follow strict rules  
• React Router enables routing in React apps  
• createBrowserRouter defines routes  
• RouterProvider enables routing  
• Nested routes keep layout intact  
• Outlet renders child routes  
• Link allows navigation without page refresh  
• Dynamic routing uses parameters like :resId  
• useParams reads dynamic route values