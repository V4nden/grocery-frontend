import { createRoot } from "react-dom/client";
import "./index.scss";
import { Provider } from "react-redux";
import { store } from "./appStore";
import { RouterProvider } from "react-router-dom";
import appRouter from "./appRouter";

const root = createRoot(document.getElementById("root")!);

root.render(
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>
);
