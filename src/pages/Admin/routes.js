import AdminLogin from "pages/Admin/AdminLogin/AdminLogin";
import AdminRegister from "pages/Admin/AdminRegister/AdminRegister";
import AdminOption from "pages/Admin/AdminOption/AdminOption";
import AdminRegistrationConfirmationOverlay from "pages/Admin/AdminRegister/RegistrationOverlay";

const adminRoutes = [
  {
    path: "/admin/login",
    page: AdminLogin,
  },
  {
    path: "/admin/register",
    page: AdminRegister,
  },
  {
    path: "/admin/option",
    page: AdminOption,
  },
  {
    path: "/admin/registration-confirmation-overlay",
    page: AdminRegistrationConfirmationOverlay,
  },
];

export default adminRoutes;
