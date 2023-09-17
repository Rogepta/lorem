import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import App from "./App";

import "../src/styles/helpers.scss";
import "../src/layout/sections/sectionPromo/SectionPromo.scss";
import "../src/styles/Buttons.scss";
import "../src/styles/Typography.scss";
import "../src/components/form/Form.scss";
import "../src/styles/index.scss";
import "../src/styles/App.scss";
import "../src/layout/footer/Footer.scss";
import "../src/components/dropDown/Dropdown.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
