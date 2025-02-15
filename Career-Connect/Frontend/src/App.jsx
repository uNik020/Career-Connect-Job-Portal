import React from "react";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import Home from "./components/components_lite/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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

  //admin routes
  { path: "/admin/companies", element: <Companies /> },
  { path: "/admin/companies/create", element: <CompanyCreate /> },
  { path: "/admin/companies/:id", element: <CompanySetup /> },


]);

function App() {
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default App;
