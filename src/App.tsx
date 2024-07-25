import { createBrowserRouter, RouterProvider } from "react-router-dom"
import InitialPage from "./pages/initial"
import OtherPage from "./pages/other";

const router = createBrowserRouter([
  {
    path: "/",
    element: <InitialPage />,
  },
  {
    path: "/other",
    element: <OtherPage />
  }
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}