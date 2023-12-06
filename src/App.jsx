import React from "react";
import ReactDOM from "react-dom/client";
import '../index.css';


import React from 'react'
import Hero from "./components/Hero";

const App = () => {
  return (
    <div>
      <Hero/>
    </div>
  )
}

export default App


 const root = ReactDOM.createRoot (document.getElementById("root"));

root.render(<App/>);
 