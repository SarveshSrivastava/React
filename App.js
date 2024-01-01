/*
<div id = "parent">
    <div id = "child1">
        <h1>Child1 H1 tag</h1>
        <h2>Child1 H2 tag</h2>
    </div>
    <div id = "child2">
        <h1>Child2 H1 tag</h1>
        <h2>Child2 H2 tag</h2>
    </div>
</div>
*/



// const heading = React.createElement("h1", {id:"heading"}, "Hi Sarvesh from React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)


const parent = React.createElement("div", { id: "parent" }, 
                [React.createElement("div", { id: "child1" }, [React.createElement("h1", {},"Child1 H1 tag"), React.createElement("h2", {},"Child1 H2 tag")]), 
                    React.createElement("div", { id: "child2" }, [React.createElement("h1", {},"Child2 H1 tag"), React.createElement("h2", {},"Child2 H2 tag")])])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);                    