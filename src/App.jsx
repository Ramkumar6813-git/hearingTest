import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserContextProvider from "./UserContextProvider";
import Testing from "./components/Testing";
import Profiles from "./components/Profiles";
import Settings from "./components/Settings";
import About from "./components/About";
import Test from "./components/Test";
import Results from "./components/Results";

import "./App.css";
import TestCompleteForm from "./components/TestCompleteForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Testing />,
  },
  {
    path: "/profiles",
    element: <Profiles />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/settings/about",
    element: <About />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/results",
    element: <Results />,
  },
  {
    path: "/testCompleteForm",
    element: <TestCompleteForm />,
  },
]);

function App() {
  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  );
}

export default App;
