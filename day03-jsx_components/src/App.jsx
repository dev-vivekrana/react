
import React from 'React';
import About from './About';
const App = () => {
  // let ui = React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Hello"),
  //   React.createElement("h2", {}, "bye"),
  //   React.createElement("h3", {}, "vapaus aao")
  // ]);
  // return ui;
  return (
    <div>
      <h1>Hello</h1>
      {/* {About()} */}
      <About>
        <h1>I am children under the about</h1>
      </About>
    </div>
  );
};
export default App;
