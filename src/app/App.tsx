import { useState } from "react";
import "./App.css";
import NavBar from "../entities/navbar/navBar";
import CartPopup from "../widgets/cart/ui/cartPopup";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <CartPopup />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
