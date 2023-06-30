import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/Root";
import LoginPage from "./pages/LoginPage";
import Welcome from "./pages/Welcome";
import Home, { loader as homeLoader } from "./pages/Home";
import Register from "./pages/Register";
import About from "./pages/About";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Welcome /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <Register /> },
      { path: "About", element: <About /> },
      {
        path: "home",
        element: <RootLayout />,
        children: [
          {
            index: true,
            element: <Home />,
            loader: homeLoader,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
