import React from "react";
import { RouterProvider } from "react-router-dom";
import Index from './routes/Index.jsx';

function App() {
  return <RouterProvider router={Index} />;
}

export default App
