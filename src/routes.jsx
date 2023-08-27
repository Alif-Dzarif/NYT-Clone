import { createBrowserRouter, redirect } from "react-router-dom";
import Home from './pages/Home'
import Navbar from "./components/Navbar";
import Filtered from './pages/Filtered'
import Detail from "./pages/Detail";

const router = createBrowserRouter([
  {
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "news-category/:catId",
        element: <Filtered />
      },
      {
        path: "news/:postId/:slug",
        element: <Detail />
      }
    ]
  }
]);

export default router