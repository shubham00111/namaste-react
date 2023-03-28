/*
<div id='parent'>
    <div id='child1'>
        <h1>Hello there 1</h1>
        <h2>Hi there</h2>
    </div>
    
    <div id='child2'>
        <h1>Hello there 1</h1>
        <h2>Hi there</h2>
    </div>

</div>
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hello There 1"),
    React.createElement("h2", {}, "Hello There 2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello There 1"),
    React.createElement("h2", {}, "Hello There 2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
