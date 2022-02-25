import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes} from 'react-router-dom';
import {Home} from "./pages/Home";
import {Login} from "./pages/Login";
import { Sobre } from "./pages/Sobre";
import { Shop } from "./pages/Shop";
import { Cart } from "./pages/cart";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/sobre" element={<Sobre />}/>
          <Route path="/shop" element={<Shop />}/>
          <Route path="/carrinho" element={<Cart />}/>
        </Routes>
        {/*<Footer />*/}
      </div>
    </div>
  );
}

export default App;
