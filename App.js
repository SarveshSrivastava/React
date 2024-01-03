import React from "react";
import ReactDOM from "react-dom/client"


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

//React.createElement()  this is an object not an html tag
//React.createElement(tag, {attributes to the tag like id, name ......}, child element) accepts 3 arguments
//sibling tags are declared in array

console.log(parent)     //this will print the object as React.createElement()  this is an object not an html tag

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);                    