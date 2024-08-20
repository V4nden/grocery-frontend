import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NavBar from "../entities/navbar/navBar";
import MainPage from "../pages/mainPage";
import StorePage from "../pages/storePage";
import CartPopup from "../widgets/cart/ui/cartPopup";

const root = createRoot(document.getElementById("root")!);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/store",
        element: <StorePage />,
      },
      {
        path: "/",
        element: <MainPage />,
      },
    ],
  },
]);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
