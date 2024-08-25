import CartPopup from "@/widgets/cart/ui/CartPopup";
import NavBar from "@/widgets/navbar/NavBar";
import { Outlet } from "react-router-dom";

function BaseLayout() {
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

export default BaseLayout;
