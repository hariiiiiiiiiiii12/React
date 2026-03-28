# Episode 13 – Time for Test (Testing React Applications)

In this episode we learn how to write **unit tests and integration tests** for React applications using **React Testing Library and Jest**.

---

# What is Unit Testing

Unit testing means testing a **single component or function in isolation**.

Example:

```
Testing Header component alone
Testing Contact component alone
Testing a simple JavaScript function
```

The goal is to ensure each piece of code works correctly.

---

# Testing Libraries Used

We use two libraries for testing.

```
1. Jest
2. React Testing Library
```

Jest is a **JavaScript testing framework**.

React Testing Library is used to **test React components**.

React Testing Library internally uses **Jest**.

---

# Installing Testing Libraries

Since we are not using Create React App, we must install testing libraries manually.

Required packages:

```
jest
@testing-library/react
@testing-library/jest-dom
```

Parcel already uses **Babel**, so additional Babel configuration is required.

---

# Babel Configuration Issue

Parcel already uses Babel internally.

If we add our own `babel.config.js`, it overrides Parcel’s Babel configuration.

To resolve this conflict we configure Babel so that **Jest uses our configuration instead of Parcel's default one**.

This allows JSX to work inside test files.

---

# Running Tests

Add the test script inside `package.json`.

Example:

```json
"scripts": {
  "test": "jest"
}
```

Now run tests using:

```bash
npm run test
```

---

# Jest Configuration

Run the following command:

```bash
npx jest --init
```

During configuration select:

```
Environment → jsdom
```

Reason:

```
Tests do not run inside a browser.
They run inside jsdom which simulates a browser environment.
```

jsdom creates a virtual DOM environment.

---

# Test File Location

Jest automatically looks for test files inside:

```
__tests__ folder
```

Example structure:

```
src
 ├── components
 ├── utils
 └── __tests__
        ├── sum.test.js
        └── Contact.test.js
```

All files inside `__tests__` are treated as test files.

---

# Writing a Simple Test Case

Example:

```javascript
test("adds two numbers correctly", () => {
  expect(2 + 2).toBe(4);
});
```

Explanation:

```
test() → defines the test case
expect() → assertion function
toBe() → matcher
```

---

# Structure of a Test

Typical testing pattern:

```
1. Render component
2. Query element
3. Assert expected result
```

---

# Writing a React Component Test

Example: Testing the Contact page.

```javascript
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

test("should load Contact component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});
```

Explanation:

```
render() → renders component to jsdom
screen → queries DOM elements
expect() → assertion
```

---

# JSX Error in Test

If JSX is not enabled inside tests, install:

```
babel-preset-react
```

Add it to the Babel configuration so Jest can transform JSX.

---

# Fixing toBeInTheDocument Error

Install:

```
@testing-library/jest-dom
```

Import inside the test file:

```javascript
import "@testing-library/jest-dom";
```

Now matchers like:

```
toBeInTheDocument()
toBeVisible()
toBeEnabled()
```

become available.

---

# Testing Button in Contact Page

Example:

```javascript
test("should load button in contact page", () => {
  render(<Contact />);

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});
```

---

# Testing Multiple Inputs

Example:

```javascript
test("should render two input boxes", () => {
  render(<Contact />);

  const inputs = screen.getAllByRole("textbox");

  expect(inputs.length).toBe(2);
});
```

Important difference:

```
getByRole() → returns single element
getAllByRole() → returns multiple elements
```

---

# Virtual DOM in Testing

When we query elements using:

```javascript
screen.getByRole()
```

It returns a **virtual DOM element**, not a real HTML element.

Example output:

```
HTMLInputElement
```

This represents the DOM element inside jsdom.

---

# Grouping Test Cases

We can group related test cases using:

```
describe()
```

Example:

```javascript
describe("Contact Page Tests", () => {

  test("should load heading", () => {
  });

  test("should load button", () => {
  });

});
```

---

# test() vs it()

Both are identical.

Example:

```javascript
test("should render component")
```

or

```javascript
it("should render component")
```

`it()` is simply an alias for `test()`.

---

# Testing Header Component

When testing Header component we encounter an issue.

Header uses:

```
Redux store
React Router Link
```

jsdom understands React and JSX but not Redux or Router context.

So we must provide those contexts.

---

# Providing Redux Store in Tests

Example:

```javascript
render(
  <Provider store={appStore}>
     <Header />
  </Provider>
);
```

This allows the component to access the Redux store.

---

# Providing Router Context

Header also uses `Link`.

So we wrap the component with `BrowserRouter`.

Example:

```javascript
render(
  <BrowserRouter>
    <Provider store={appStore}>
      <Header />
    </Provider>
  </BrowserRouter>
);
```

Now the test runs successfully.

---

# Checking Cart Items in Header

Example:

```javascript
const cart = screen.getByText(/cart/i);

expect(cart).toBeInTheDocument();
```

Regex `/cart/i` performs case-insensitive matching.

---

# Simulating Click Events

To simulate user interaction we use:

```
fireEvent
```

Example:

```javascript
import { fireEvent } from "@testing-library/react";
```

Example test:

```javascript
test("login button toggles to logout", () => {

  render(<Header />);

  const button = screen.getByRole("button", { name: "Login" });

  fireEvent.click(button);

  expect(button).toHaveTextContent("Logout");

});
```

---

# Testing Components with Props

Example: RestaurantCard component.

```javascript
render(<RestaurantCard resData={mockRestaurant} />);
```

This allows testing components that receive props.

---

# Testing Flow Summary

Basic testing steps:

```
1. Render component
2. Query element
3. Assert expected behavior
```

Example:

```
render()
screen.getByRole()
expect()
```

---

# Key Takeaways

• Unit testing tests components in isolation  
• Jest is the testing framework  
• React Testing Library tests React UI components  
• jsdom simulates browser environment  
• Tests follow render → query → assert pattern  
• Redux and Router must be provided during testing  
• fireEvent simulates user interaction  
• describe() groups related tests