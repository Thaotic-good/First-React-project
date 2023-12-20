import React from 'react'; //imports the React library.
import ReactDOM from 'react-dom/client';
//imports the ReactDOM object (for interacting with the DOM in a web browser).
// from the 'react-dom/client' package ('/client' part indicates that it's specifically for client-side rendering).


const myFirstElement = <h1>Hello React!</h1>
//JSX allows you to write HTML-like syntax which gets transformed into JavaScript at build time.


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement);