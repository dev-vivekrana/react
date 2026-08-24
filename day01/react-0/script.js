// console.log(window);
// console.log(React);

// creating element from real dom
let h2 = document.createElement("h2");
h2.textContent="I am made from real dom";
document.body.append(h2);
console.dir(h2);

// creating element from react
let rh2 = React.createElement("h2",null,"hi i am created from react");
console.log(rh2);

// if we want to create element inside element
let rh3= React.createElement("h3",null,React.createElement("span",null,"I am span inside h3"));
console.log(rh3);


// Now how to integrate the react element in the body
document.body.append(rh2);

// now react dom comes into the picture
console.log(ReactDOM);

// select the real dom element for react-dom
let realDomElement = document.querySelector("#root");

// now react dom ek element pakdega lets say root and then use apna root element banayega and then sare elements ya react ko usme render karvayega
let rootOfReact = ReactDOM.createRoot(realDomElement);

// rootOfReact.render(rh2);
rootOfReact.render(rh3);