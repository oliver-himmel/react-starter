import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
//import "./index.css";

import { EFA, KERN } from "@kern-ux/themes";
import { register } from "@public-ui/components";
import { defineCustomElements as Kolibri } from "@public-ui/components/dist/loader";
import { defineCustomElements as Kern } from "@kern-ux/components/dist/loader";

register([EFA, KERN], [Kern, Kolibri], {
  theme: {
    //efa or kern
    name: "efa",
  },
})
  .then(() => {
    ReactDOM.createRoot(document.getElementById("root")).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  })
  .catch(console.warn);
