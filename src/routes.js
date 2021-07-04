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
import StudentLayout from "pages/StudentLayout/StudentLayout";
import StudentDashboard from "pages/StudentDashboard/StuduentDashboard";

import { Outlet } from "react-router-dom";

const Resume = () => {
  return <p>Resume</p>;
};

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
      { path: "login", element: <Login variant="admin" /> },
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
    path: "student",
    element: <StudentLayout />,
    children: [
      { path: "/", element: <StudentDashboard /> },
      { path: "dashboard", element: <StudentDashboard /> },
      { path: "resume", element: <Resume /> },
      { path: "jobs/id=:id", element: <p>Jobs</p> },
    ],
  },
  {
    path: "student/login",
    element: <Login variant="student" />,
  },
];

export default routes;
