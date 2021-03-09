import Landing from "pages/Landing/Landing";
import GetStarted from "pages/GetStarted/GetStarted";
import AdminLogin from "pages/Admin/AdminLogin/AdminLogin";
import AdminRegister from "pages/Admin/AdminRegister/AdminRegister";
import AdminOption from "pages/Admin/AdminOption/AdminOption";
import AdminRegistrationOverlay from "pages/Admin/AdminRegister/RegistrationOverlay";
import DashboardLayout from "pages/Admin/Dashboard/DashboardLayout";
import DashboardHome from "pages/Admin/Dashboard/view/Home";
import Group from "pages/Admin/Dashboard/view/Group";

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
        element: <DashboardLayout />,
        children: [
          { path: "home", element: <DashboardHome /> },
          { path: "group/:id", element: <Group /> },
          { path: "account", element: <h1>Account</h1> },
          { path: "settings", element: <h1>Settings</h1> },
        ],
      },
    ],
  },
];

export default routes;
