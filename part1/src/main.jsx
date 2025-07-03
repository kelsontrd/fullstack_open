import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// let contador = 1;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// const recarregar = () => {
//   // contador += 1
//   createRoot(document.getElementById("root")).render(
//     <StrictMode>
//       <App contador={contador} />
//     </StrictMode>
//   );
// };

// setInterval(() => {
//   recarregar();
//   contador += 1;
// }, 1000);

// recarregar()
// contador += 1
// recarregar()
// contador += 1
// recarregar()
// contador += 1
// recarregar()
