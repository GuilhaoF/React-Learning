import { createBrowserRouter } from "react-router-dom";
import { About } from "../pages/About";
import { Albuns } from "../pages/Albuns";
import ErrorPage from "../pages/error-page";
import { Home } from "../pages/Home";
import { PhotosId } from "../pages/PhotosId";
import { ProfilePage } from "../pages/ProfilePage";


export const Router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <ErrorPage /> },
  { path: "/about", element: <About /> },
  { path: "/profile/:name", element: <ProfilePage /> },
  { path:"/album/:slug",element:<Albuns/>},
  {path:"/photos/:slug",element:<PhotosId/>},
]);
