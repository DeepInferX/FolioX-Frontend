import Landing from "pages/Landing/Landing";
import GetStarted from "pages/GetStarted/GetStarted";
import Login from "pages/Login/Login";
import AdminRegister from "pages/Admin/AdminRegister/AdminRegister";
import AdminOption from "pages/Admin/AdminOption/AdminOption";
import AdminRegistrationOverlay from "pages/Admin/AdminRegister/RegistrationOverlay";
import DashboardLayout from "pages/Admin/Dashboard/DashboardLayout";
import DashboardHome from "pages/Admin/Dashboard/view/Home";
import Group from "pages/Admin/Dashboard/view/Group";
import AddGroup from "pages/Admin/Dashboard/view/AddGroup";
import Courses from "pages/Admin/Dashboard/view/Courses";
import Job from "pages/Admin/Dashboard/view/Job";
import AddJob from "pages/Admin/Dashboard/view/AddJob";

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
      { path: "/", element: <Login variant="admin" /> },
      { path: "login", element: <Login variant="admin"/> },
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
          { path: "group/id=:id", element: <Group /> },
          { path: "group/add", element: <AddGroup /> },
          { path: "courses", element: <Courses /> },
          { path: "jobs/id=:id", element: <Job /> },
          { path: "jobs/add", element: <AddJob /> },
        ],
      },
    ],
  },
  {
    path:"student",
    children:[
      {path: "/login", element:<Login variant="student" />}
    ]
  }
];

export default routes;
