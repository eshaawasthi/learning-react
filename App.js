const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "Hello sibling1"),
    React.createElement("h1", {}, "Hello sibling2")]
  )
);

console.log(heading); //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); // convert it into the h1 tag and putting it over root
