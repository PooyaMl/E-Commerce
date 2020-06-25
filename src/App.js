import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage";
import { Route } from "react-router";

const HatPage = () => (
  <div>
    <h1> Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop/hats" component={HatPage} />
      </switch>
    </div>
  );
}

export default App;
