import { createBrowserRouter, RouterProvider } from "react-router-dom"
import InitialPage from "./pages/initial"

const router = createBrowserRouter([
  {
    path: "/",
    element: <InitialPage />,
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}