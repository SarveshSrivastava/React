# Ignited our application created a react application manually

## build/bundle application using parcel
cmd - npx parcel index-react.html - creates dist and .parcel-cache folders in our project
### npm is to install packages npx is to execute package
cmd for production build - npx parcel build index-react.html - will throw an error as in package.json we have give "main": "App.js" which is conflicting as when building or starting our application on server we give index-react.html as our starting point - solution: remove "main": "App.js" from package.json.

when creating prod build all the code is compressed minified and stored in 
dist\index-react.html
dist\index-react.ae356f4c.css
dist\index-react.ba953147.js
these three files

remove cdn from index-react.html as it is costly as we will fetch react and react-dom from browsers instead install react and react dom we will load react from node modules instead of fetching from browsers

npm i react
npm i react-dom

now to use react and react-dom we will have to import it.

Add the type="module" attribute to the <script> tag. - as we have removed cdns which was declared before the script tag of App.js so when App.js is found it already have React and ReactDOM from cdns now as we are loading from nodemodules we will have to define type="module" in our script tag

to remove Warning: You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".