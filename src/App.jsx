import React from "react";
import ReactDOM from "react-dom/client";
import '../index.css';


import React from 'react'
import Hero from "./components/Hero";
import Body from "./components/Body";

const App = () => {
  return (
    <div>
      <Hero/>
      <Body/>
    </div>
  )
}

export default App


 const root = ReactDOM.createRoot (document.getElementById("root"));

root.render(<App/>);
 