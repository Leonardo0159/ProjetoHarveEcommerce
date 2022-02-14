import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <div className="Container">
        {<Header />}
        {<Main />}
        {/*<Footer />*/}
      </div>
    </div>
  );
}

export default App;
