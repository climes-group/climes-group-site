import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import MainPanel from "./MainPanel.jsx";
import Header from "./components/Header/index.jsx";
import "./index.css";
import About from "./pages/About.jsx";
import Chart from "./pages/Chart.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import Purpose from "./pages/Purpose.jsx";
import Sample from "./pages/Sample.jsx";
import Services from "./pages/Services.jsx";

import { Provider } from "react-redux";
import { store } from "./state/store.js";

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
      {
        path: "chart",
        element: (
          <>
            <Header selected="chart" />
            <MainPanel heading="CHART">
              <Chart />
            </MainPanel>
          </>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
