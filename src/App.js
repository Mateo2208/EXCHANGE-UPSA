import React from "react";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import CardComponent from "./components/CardComponent";

const App = () => {
  return (
    <div>
      <Header />
      <Gallery/>
      <CardComponent/>
    </div>
  );
};

export default App;
