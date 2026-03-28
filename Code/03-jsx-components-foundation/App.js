import React from 'react';
import ReactDOM from 'react-dom/client';

//JSX
const heading = <h1 className="head">Hello World JSX</h1>;

console.log('React Element: ' + JSON.stringify(heading));

//Functional Components
const HeadingComponent = () => (
  <div id="container">
    <h1 className="head">Hello World Functional Component</h1>
  </div>
);

console.log('Functional Component: ' + HeadingComponent);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);
