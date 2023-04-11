import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/app";
import { offers } from "./components/mocks/offers";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const COUNT_PLACES = offers.length;

root.render(
  <React.StrictMode>
    <App countPlaces={COUNT_PLACES} offers={offers} />
  </React.StrictMode>
);
