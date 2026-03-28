# Episode 11 – Data is the New Oil (HOC, Controlled Components, Context)

In this episode we explore several important React concepts including:

- Higher Order Components (HOC)
- Accordion UI
- Controlled vs Uncontrolled Components
- Lifting State Up
- Props Drilling
- React Context

These concepts help manage **data flow in complex applications**.

---

# Higher Order Components (HOC)

A **Higher Order Component** is a function that takes a component and returns a new enhanced component.

Definition:

```
HOC = Function that takes a component and returns a component
```

It works like an **enhancer** that modifies the original component.

Example scenario:

Some restaurants have a **"Promoted" label**.

Instead of modifying the RestaurantCard component directly, we create an HOC.

Example:

```javascript
const withPromotedLabel = (RestaurantCard) => {

  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };

};
```

Explanation:

```
RestaurantCard → input component
withPromotedLabel → enhanced component
```

We pass props using **spread operator**.

```javascript
<RestaurantCard {...props} />
```

Now promoted restaurants can display a label.

---

# Data Layers in React

Important layers in React applications:

```
State
Props
Local Variables
```

Managing these layers correctly is crucial for application performance.

---

# Restaurant Menu Categories

Restaurant menus contain multiple **food categories**.

Example:

```
Recommended
Newly Added
Desserts
Beverages
```

These categories are fetched from the API.

---

# Accordion UI

To display categories we build an **Accordion component**.

Accordion behavior:

```
Title
↓
Expandable / Collapsible body
```

Example component structure:

```
RestaurantMenu
   └── RestaurantCategory
           └── ItemList
```

Each category has:

```
Title
List of items
```

---

# Building the Accordion

Example condition:

```javascript
{showItems && <ItemList items={items} />}
```

This means:

```
If showItems is true → display items
Else → hide items
```

---

# Toggle Accordion

To expand and collapse:

```javascript
setShowItems(!showItems);
```

The `!` operator toggles the value.

```
true → false
false → true
```

---

# Problem: Multiple Accordions Open

Each `RestaurantCategory` has its own state.

Example:

```
Recommended → open
Newly Added → open
Desserts → open
```

But we want:

```
Only one accordion open at a time
```

---

# Lifting State Up

Each category having its own state creates problems.

Solution:

```
Move state to parent component
```

Parent:

```
RestaurantMenu
```

Child:

```
RestaurantCategory
```

Now the parent controls which accordion is open.

This concept is called:

```
Lifting State Up
```

---

# Controlled vs Uncontrolled Components

Before lifting state:

```
RestaurantCategory controls itself
```

After lifting state:

```
Parent RestaurantMenu controls RestaurantCategory
```

Now RestaurantCategory becomes a:

```
Controlled Component
```

---

# One Way Data Flow

React follows:

```
Top → Down Data Flow
```

Data moves from **parent components to child components**.

---

# Props Drilling

Sometimes data must pass through many components.

Example:

```
RestaurantMenu
   ↓
RestaurantCategory
   ↓
ItemList
```

If data is needed in ItemList, it must pass through intermediate components.

This is called:

```
Props Drilling
```

---

# React Context

To avoid props drilling, React provides **Context**.

Context works like a **global data store**.

Example global data:

```
Logged-in user
Theme (dark/light)
Language
```

Example:

```
UserContext
```

---

# Creating Context

Example:

```javascript
import { createContext } from "react";

const UserContext = createContext({
  userName: "Default User"
});

export default UserContext;
```

---

# Accessing Context with useContext

Example:

```javascript
import { useContext } from "react";

const Header = () => {

  const data = useContext(UserContext);

};
```

This allows accessing context anywhere.

---

# Context in Class Components

Hooks cannot be used in class components.

Instead we use:

```javascript
UserContext.Consumer
```

Example:

```javascript
<UserContext.Consumer>
  {(data) => <h1>{data.userName}</h1>}
</UserContext.Consumer>
```

---

# Updating Context Value

To update context values we use **Context Provider**.

Example:

```javascript
<UserContext.Provider value={{ userName: "Akshay Saini" }}>
  <App />
</UserContext.Provider>
```

Now every component inside the app can access this value.

---

# Multiple Context Providers

React allows nested providers.

Example:

```
App Provider → userName: Akshay
Header Provider → userName: Elon Musk
```

Header will use:

```
Elon Musk
```

Other components will use:

```
Akshay
```

---

# Updating Context Dynamically

Example:

```javascript
const [userName, setUserName] = useState("Akshay");
```

Pass to provider:

```javascript
<UserContext.Provider value={{ userName, setUserName }}>
```

Now when the input box updates the state:

```
Context updates automatically
```

Example input:

```javascript
<input
  value={userName}
  onChange={(e) => setUserName(e.target.value)}
/>
```

Every component using context will update instantly.

---

# Key Takeaways

• Higher Order Components enhance existing components  
• Accordion UI uses conditional rendering  
• Lifting state up helps control multiple components  
• React follows one-way data flow  
• Props drilling occurs when data passes through many components  
• React Context provides global state access  
• Context Provider distributes data across the app  
• Context updates automatically when state changes