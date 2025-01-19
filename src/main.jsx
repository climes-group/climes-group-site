import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import MainPanel from "./MainPanel.jsx";
import Header from "./components/Header/index.jsx";
import { ThemeProvider } from "./containers/ThemeProvider.jsx";
import "./index.css";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import Purpose from "./pages/Purpose.jsx";
import Sample from "./pages/Sample2.jsx";
import Services from "./pages/Services.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Header />
            <MainPanel>
              <Home />
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
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
