import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Import the necessary functions
import { Home } from "./pages/Home";
import { UserLogin } from "./pages/UserLogin";
import { UserSignUp } from "./pages/UserSignUp";
import { CaptainLogin } from "./pages/CaptainLogin";
import { CaptainSignUp } from "./pages/CaptainSignup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <UserLogin />,
  },
  {
    path: "/signup",
    element: <UserSignUp />,
  },
  {
    path: "/captain-login",
    element: <CaptainLogin />,
  },
  {
    path: "/captain-signup",
    element: <CaptainSignUp />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />; // Provide the router to your app
};

export default App;
