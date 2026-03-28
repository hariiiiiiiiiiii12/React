# Episode 04 – Talk is Cheap, Show Me the Code

This episode focuses on building a **real UI using React components**, introducing **component structure, props, dynamic rendering, styling in JSX, and lists using map()**.

---

# High Level Component Structure

In React applications, we usually create a **high-level component** that contains multiple smaller components.

Example:

```
AppLayout
 ├── Header
 ├── Body
 └── Footer
```

Here:

```
AppLayout → Parent Component
Header, Body, Footer → Child Components
```

The **AppLayout component acts as the main container for the application**.

Example:

```javascript
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};
```

---

# Header Component

The **Header component** usually contains:

- Logo
- Navigation links
- Menu items

Example:

```javascript
const Header = () => {
  return (
    <div className="header">
      <h1>Food Ordering App</h1>
    </div>
  );
};
```

---

# Creating a Restaurant Card Component

Instead of repeating UI code multiple times, we create **reusable components**.

Example:

```
RestaurantCard
```

Why?

Because the application will contain **many restaurants**, and the UI for each restaurant will be similar.

This is where **component reusability** becomes important.

Example:

```javascript
const RestaurantCard = () => {
  return (
    <div className="res-card">
      <h3>Meghna Foods</h3>
      <h4>Biryani</h4>
      <h4>4.4 Stars</h4>
      <h4>30 minutes</h4>
    </div>
  );
};
```

---

# Inline Styling in JSX

Inline styles in JSX are **not written the same way as HTML**.

In HTML:

```html
<div style="color:red"></div>
```

In JSX:

```javascript
<div style={{ color: "red" }}></div>
```

Important rule:

```
Style attribute takes a JavaScript object
```

Example:

```javascript
const styleCard = {
  backgroundColor: "#f0f0f0"
};

<div style={styleCard}></div>
```

---

# Hardcoded Restaurant Data Problem

Initially we might create a card like this:

```javascript
<RestaurantCard />
```

But real applications will contain **many restaurants**, not just one.

Example restaurants:

```
KFC
McDonalds
Burger King
Dominos
```

So we cannot hardcode every restaurant manually.

We need **dynamic rendering**.

---

# Introduction to Props

Props allow us to pass data to components.

Think of props like **arguments to functions**.

Example:

```javascript
<RestaurantCard resName="KFC" cuisine="Burger" rating="4.3" />
```

Inside the component:

```javascript
const RestaurantCard = (props) => {
  return (
    <div className="res-card">
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>{props.rating}</h4>
    </div>
  );
};
```

Props are stored inside a **JavaScript object**.

```
props = {
  resName: "KFC",
  cuisine: "Burger",
  rating: "4.3"
}
```

---

# Destructuring Props

Instead of writing:

```javascript
props.resName
```

We can destructure props.

Example:

```javascript
const RestaurantCard = ({ resName, cuisine, rating }) => {
  return (
    <div className="res-card">
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating}</h4>
    </div>
  );
};
```

This makes the code cleaner.

---

# Config Driven UI

Modern applications are **data driven**.

Instead of writing UI manually, we render UI based on data.

Example restaurant object:

```javascript
const resObj = {
  name: "KFC",
  cuisine: "Burger",
  rating: "4.3",
  deliveryTime: "30 minutes"
};
```

We pass this object as props.

Example:

```javascript
<RestaurantCard resData={resObj} />
```

Inside the component:

```javascript
const RestaurantCard = ({ resData }) => {
  return (
    <div className="res-card">
      <h3>{resData.name}</h3>
      <h4>{resData.cuisine}</h4>
      <h4>{resData.rating}</h4>
    </div>
  );
};
```

This approach is called **Config Driven UI**.

---

# Dynamic Images using Cloudinary

Images are often served using **Cloudinary URLs**.

Example:

```
BASE_CLOUDINARY_URL + imageId
```

Example:

```javascript
<img src={BASE_URL + resData.cloudinaryImageId} />
```

This allows images to be loaded dynamically.

---

# Rendering Multiple Restaurant Cards

Instead of manually creating cards, we store restaurants in an **array**.

Example:

```javascript
const resList = [
  { name: "KFC", rating: "4.3" },
  { name: "McDonalds", rating: "4.2" },
  { name: "Dominos", rating: "4.4" }
];
```

We then loop through the array.

---

# Using map() to Render Components

JavaScript `map()` function helps render multiple components.

Example:

```javascript
resList.map((restaurant) => (
  <RestaurantCard resData={restaurant} />
));
```

This creates **a card for each restaurant**.

---

# Unique Key Warning

When rendering lists in React, each element must have a **unique key**.

Example:

```javascript
resList.map((restaurant) => (
  <RestaurantCard key={restaurant.id} resData={restaurant} />
));
```

If the key is missing, React shows this warning:

```
Each child in a list should have a unique "key" prop
```

---

# Why Keys are Important

Keys help React:

- Identify which elements changed
- Optimize rendering
- Improve performance

---

# Using Index as Key

Example:

```javascript
key={index}
```

But this is **not recommended**.

React suggests using **unique IDs instead of indexes**.

---

# Key Takeaways

• React applications are built using multiple reusable components  
• Components can be nested inside other components  
• Props allow passing data to components  
• Props behave like arguments to functions  
• UI can be dynamically generated using data  
• Arrays and map() help render multiple components  
• Each list item must have a unique key  
• Keys help React optimize rendering