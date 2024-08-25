import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import StorePage from "@/pages/store/ui/storePage";
import MainPage from "@/pages/main/ui/mainPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    errorElement: <h1>Something went wrong</h1>,
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
export default appRouter;
