import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/Root";
import LoginPage from "./pages/LoginPage";
import HeroRootLayout from "./pages/HeroRootLayout";
import Welcome from "./pages/Welcome";
import Home from './pages/Home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeroRootLayout />,
    children: [{ index: true, element: <Welcome /> }],
  },
  { path: "login", element: <LoginPage /> },
  {
    path: "home",
    element: <RootLayout />,
    children: [{ index: true, element: <Home /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
