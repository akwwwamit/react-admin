import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // <-- wrap the App here
import App from "./App.jsx";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>,
);
