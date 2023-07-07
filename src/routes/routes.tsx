import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import App from "../App";
import Login from "../pages/login/Login";
import NotFound from "../pages/notFound/NotFound";

const routes = createBrowserRouter([
  {
    path: `/`,
    element: <App />,
  },
  {
    path: `/home`,
    element: <Home />,
  },
  {
    path: `/login`,
    element: <Login />,
  },
  {
    path: `*`,
    element: <NotFound />,
  },
]);

export default routes;
