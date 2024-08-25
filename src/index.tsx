import { createRoot } from "react-dom/client";
import App from "./App/App.tsx";
import "./index.css";

createRoot(document.querySelector("#root")!).render(<App />);
