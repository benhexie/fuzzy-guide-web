import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import ImageCredits from "./pages/legal/ImageCredits";
import TandC from "./pages/legal/TandC";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="image-credits" element={<ImageCredits />} />
        <Route path="terms-and-conditions" element={<TandC />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
      </Route>
    </Routes>
  </Router>
);

reportWebVitals();
