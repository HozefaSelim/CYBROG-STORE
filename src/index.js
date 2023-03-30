import App from "./App.js";
import ReactDom from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import ContextProvider from "./Context/Context";
const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <ContextProvider>
      <App />
    </ContextProvider>
  </Router>
);
