import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const heading = <h1>React Element</h1>;

//React Functional Component
const HeadingComponent1 = () => {
  return <h1>HeadingComponent with Explicit Return</h1>;
};

const HeadingComponent2 = () => {
  return (
    <div>
      {heading}     {/* this is how we can include JS this will evaluate any expression inside JSX  */}
      <h1>HeadingComponent with Explicit Return with paranthesis</h1>
    </div>
  );
};

const HeadingComponent3 = () => <h1>HeadingComponent with Implicit Return</h1>;

const HeadingComponent4 = () => (
  <div>
    <HeadingComponent1/>
    <HeadingComponent2/>
    <HeadingComponent3/>        {/* This is how an React Component is used inside another this is referred as Functional Composition */}
    <h1>HeadingComponent with Implicit Return with paranthesis</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);       //this is how we render React Element

root.render(<HeadingComponent4/>)       // this how we render react component
