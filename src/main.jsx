import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPanel from "./MainPanel.jsx";
import Header from "./Header.jsx";
import Purpose from "./pages/Purpose.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import Sample from "./pages/Sample.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Header selected="purpose" />
            <MainPanel heading="Purpose">
              <Purpose />
            </MainPanel>
          </>
        ),
      },
      {
        path: "purpose",
        element: (
          <>
            <Header selected="purpose" />
            <MainPanel heading="Purpose">
              <Purpose />
            </MainPanel>
          </>
        ),
      },
      {
        path: "about",
        element: (
          <>
            <Header selected="about" />
            <MainPanel heading="About">
              <About />
            </MainPanel>
          </>
        ),
      },
      {
        path: "services",
        element: (
          <>
            <Header selected="services" />
            <MainPanel heading="Services">
              <Services />
            </MainPanel>
          </>
        ),
      },
      {
        path: "contact",
        element: (
          <>
            <Header selected="contact" />
            <MainPanel heading="Contact">
              <Contact />
            </MainPanel>
          </>
        ),
      },
      {
        path: "sample",
        element: (
          <>
            <Header selected="sample" />
            <MainPanel heading="Sample Page">
              <Sample />
            </MainPanel>
          </>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
