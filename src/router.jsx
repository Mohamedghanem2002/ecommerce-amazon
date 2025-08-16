// router.js
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <MainLayout>
          <Home />
        </MainLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/auth",
    element: <MainLayout />, 
    children: [
      { path: "login", element: <Login /> },
      { path: "signup", element: <Register /> },
    ],
  },
]);