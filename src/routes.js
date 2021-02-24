import Landing from "pages/Landing/Landing";
import GetStarted from "pages/GetStarted/GetStarted";
import AdminLogin from "pages/Admin/AdminLogin/AdminLogin";
import AdminRegister from "pages/Admin/AdminRegister/AdminRegister";
import AdminOption from "pages/Admin/AdminOption/AdminOption";
import AdminRegistrationOverlay from "pages/Admin/AdminRegister/RegistrationOverlay";
import AdminContext from "pages/Admin/AdminContext";
import Dashboard from "pages/Admin/Dashboard/DashboardLayout";
import DashboardHome from "pages/Admin/Dashboard/view/Home";

const routes = [
  {
    path: "/",
    children: [
      { path: "/", element: <Landing /> },
      { path: "/get-started", element: <GetStarted /> },
    ],
  },
  {
    path: "admin",
    element: <AdminContext />,
    children: [
      { path: "/", element: <AdminLogin /> },
      { path: "login", element: <AdminLogin /> },
      { path: "register", element: <AdminRegister /> },
      { path: "option", element: <AdminOption /> },
      {
        path: "registration-confirm-overlay",
        element: <AdminRegistrationOverlay />,
      },
      {
        path: "dashboard",
        element: (
            <Dashboard />
        ),
        children: [{ path: "/", element: <DashboardHome /> }],
      },
    ],
  },
];

export default routes;
