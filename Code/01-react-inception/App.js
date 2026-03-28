const heading = React.createElement(
  'h1',
  { id: 'heading' }, //ELEMENT ATTRIBUTE
  'Hello World from React!!!' //CHILDREN OF THE ELEMENT, HERE h1 ELEMENT
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
