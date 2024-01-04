## Add scripts to start the application
- instead of starting app via "npx parcel index-react.html" or "npx parcel build index-react.html"
    add this to scripts in package.json
    - for dev use "npm run start" or "npm start"
    - for production build use "npm run ss" we can't use ~"npm ss"~


## JSX
- JSX is not HTML
- JSX is like HTML
    <h1 id="head" class="head">heading</h1> -   HTML
    <h1 id="head" className="head">heading</h1> -   JSX (this is why JSX is not HTML it is like HTML)

Earlier we were using
    - React.createElement("h1",{id:"head"},"heading);   -   this is an object not HTML  -   This object when passed to ReactDOM.render() makes it HTML and renders in browsers
    This is difficult to understand so we use JSX
    - const jsxHeading = <h1 id="head">heading</h1> -   now this is transpiled by babel for JS Engine in browsers to understand 
    - Babel takes JSX transpiles it to React.createElement() only internally 