import CartPopup from "@/widgets/cart/ui/cartPopup";
import NavBar from "@/widgets/navbar/navBar";
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
