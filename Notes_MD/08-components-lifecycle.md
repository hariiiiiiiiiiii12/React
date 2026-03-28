# Episode 08 – Let's Get Classy (Class Based Components)

In this episode we explore **Class Based Components in React**, how they differ from functional components, how they manage **props, state, lifecycle methods, and API calls**.

---

# Introduction to Class Based Components

Class based components are **normal JavaScript classes** that extend `React.Component`.

Example:

```javascript
import React from "react";

class UserClass extends React.Component {

  render() {
    return (
      <div>
        <h1>User Component</h1>
      </div>
    );
  }

}

export default UserClass;
```

React identifies a class component because it **extends React.Component**.
Important rule:

```
Class components must contain a render() method.
```

The `render()` method returns JSX.

---

# Functional vs Class Components

Functional Component:

```javascript
const User = (props) => {
  return <h1>{props.name}</h1>;
};
```

Class Component:

```javascript
class UserClass extends React.Component {
  render() {
    return <h1>{this.props.name}</h1>;
  }
}
```

Key difference:

```
Functional Component → props passed as parameters
Class Component → props accessed using this.props
```

---

# Passing Props in Class Components

Props are received using the **constructor**.

Example:

```javascript
class UserClass extends React.Component {

  constructor(props) {
    super(props);

    console.log(props);
  }

  render() {
    return <h1>{this.props.name}</h1>;
  }
}
```

Important rule:

```
super(props) must be called inside constructor.
```

---

# State in Class Components

In functional components we use:

```
useState()
```

But **hooks do not exist in class components**.

Instead, state is created inside the constructor.

Example:

```javascript
class UserClass extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "Akshay"
    };
  }

}
```

State is created **when the class instance is created**.

---

# Updating State in Class Components

State should **never be updated directly**.

Incorrect:

```javascript
this.state.count = 1;
```

Correct:

```javascript
this.setState({
  count: 1
});
```

Example updating multiple values:

```javascript
this.setState({
  count: 1,
  name: "React"
});
```

`setState()` triggers a **re-render of the component**.

---

# Lifecycle of Class Components

React components follow a lifecycle.

Main phases:

```
1. Mounting
2. Updating
3. Unmounting
```

---

# Mounting Phase

Mounting happens when the component **is first loaded into the UI**.

Steps in mounting phase:

```
1. constructor()
2. render()
3. React updates DOM
4. componentDidMount()
```

Example:

```javascript
componentDidMount() {
  console.log("Component mounted");
}
```

`componentDidMount()` runs **after the component is rendered in the DOM**.

---

# Parent and Child Lifecycle

Example:

```
Parent Component
   |
   ├── Child Component 1
   └── Child Component 2
```

React optimizes rendering by **batching operations**.

Render Phase:

```
constructor()
render()
```

Commit Phase:

```
DOM update
componentDidMount()
```

React batches operations for performance.

Reason:

```
DOM manipulation is expensive
```

So React groups DOM updates together.

---

# Making API Calls in Class Components

API calls are usually made inside `componentDidMount()`.

Example:

```javascript
componentDidMount() {

  fetch("https://api.github.com/users/username")
    .then(res => res.json())
    .then(data => {
      this.setState({
        userInfo: data
      });
    });

}
```

Why here?

```
componentDidMount() runs after the component appears on screen.
```

This is similar to:

```
useEffect(() => {}, [])
```

in functional components.

---

# Initial State Rendering

Before API data arrives:

```
React renders initial state
```

Example initial state:

```javascript
this.state = {
  userInfo: {
    name: "Dummy",
    location: "Unknown"
  }
};
```

Then API data arrives and `setState()` updates the UI.

---

# Updating Phase

When state changes:

```
setState() called
→ render() runs again
→ DOM updates
→ componentDidUpdate()
```

Example:

```javascript
componentDidUpdate() {
  console.log("Component updated");
}
```

Important:

```
constructor runs only once during mounting
```

---

# Unmounting Phase

When a component is removed from the UI:

```
componentWillUnmount()
```

Example:

```javascript
componentWillUnmount() {
  console.log("Component removed");
}
```

Example scenario:

```
User navigates from About page → Contact page
UserClass component removed from UI
componentWillUnmount() runs
```

---

# Comparing with Functional Components

Functional component equivalent:

```javascript
useEffect(() => {

  fetchData();

}, []);
```

Class component equivalent:

```javascript
componentDidMount() {
  fetchData();
}
```

Difference:

```
useEffect without dependency array → runs after every render
componentDidMount → runs only once after first mount
```

---

# Component Lifecycle Summary

Mounting Phase:

```
constructor()
render()
componentDidMount()
```

Updating Phase:

```
render()
componentDidUpdate()
```

Unmounting Phase:

```
componentWillUnmount()
```

---

# Key Takeaways

• Class components are JavaScript classes extending React.Component  
• render() method returns JSX  
• props accessed using this.props  
• state created inside constructor  
• setState() updates state and triggers re-render  
• componentDidMount() used for API calls  
• componentDidUpdate() runs after updates  
• componentWillUnmount() runs when component is removed  
• Lifecycle phases include Mounting, Updating, and Unmounting