import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import Home from "./components/components_lite/Home";
import Navbar from "./components/components_lite/Navbar";
import PrivacyPolicy from "./components/components_lite/PrivacyPolicy";
import Jobs from "./components/components_lite/Jobs";
import Browse from "./components/components_lite/Browse";
import Profile from "./components/components_lite/Profile";
import Description from "./components/components_lite/Description";
import TermsOfService from "./components/components_lite/TermsofService";

import Companies from "./components/admincomponents/Companies";
import CompanyCreate from "./components/admincomponents/CompanyCreate";
import CompanySetup from "./components/admincomponents/CompanySetup";
import AdminJob from "./components/admincomponents/AdminJobs";
import PostJob from "./components/admincomponents/PostJob";
import Applicants from "./components/admincomponents/Applicants";
import ProtectedRoute from "./components/admincomponents/ProtectedRoute";
import About from "./components/components_lite/About";
import ForgetPassword from "./components/authentication/ForgetPassword";
import ResetPassword from "./components/authentication/ResetPassword";

const appRouter = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/PrivacyPolicy", element: <PrivacyPolicy /> },
  { path: "/register", element: <Register /> },
  { path: "/Jobs", element: <Jobs /> },
  { path: "/Browse", element: <Browse /> },
  { path: "/Home", element: <Home /> },
  { path: "/Profile", element: <Profile /> },
  { path: "/description/:id", element: <Description /> },
  { path: "/Tos", element: <TermsOfService /> },
  { path: "/about", element: <About /> },
  { path: "/forgetpassword", element: <ForgetPassword /> },
  { path: "/reset-password", element: <ResetPassword /> },

  //admin routes
  {
    path: "/admin/companies",
    element: (
      <ProtectedRoute>
        {" "}
        <Companies />{" "}
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/companies/create",
    element: (
      <ProtectedRoute>
        <CompanyCreate />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/companies/:id",
    element: (
      <ProtectedRoute>
        {" "}
        <CompanySetup />{" "}
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/Jobs",
    element: (
      <ProtectedRoute>
        <AdminJob />{" "}
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/jobs/create",
    element: (
      <ProtectedRoute>
        {" "}
        <PostJob />{" "}
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/jobs/:id/applicants",
    element: (
      <ProtectedRoute>
        {" "}
        <Applicants />{" "}
      </ProtectedRoute>
    ),
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default App;
