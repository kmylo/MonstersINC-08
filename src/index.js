// REACT
import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

// CONTEXT
import { AuthProvider } from "./context/AuthContext";
import { MonstersProvider } from "./context/MonstersContext";
import { SnackBarProvider } from "./context/SnackBarContext";
import { SearchProvider } from "./context/SearchContext";

// STYLES
import "bootstrap/dist/css/bootstrap.css";
import "./styles.scss";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <SnackBarProvider>
          <SearchProvider>
            <MonstersProvider>
              <App />
            </MonstersProvider>
          </SearchProvider>
        </SnackBarProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

/**
 * TODO
 *
 * -Task:
 * [ ] add lazy loading routing (update react)
 * [ ] add pagination
 * [ ] add filtering
 * [ ] Testing (Jest & React Testing Library & Cypress) 
 * [ ] typescript
 
 *
 * DONE
 * [X] add routing
 * [X] Handle errors try catch
 * [X] Hooks
 * [X] Custom Hooks
 * [X] Spread into FILES
 * [X] CSS Media-queries
 * [X] change to AXIOS
 * [X] chain idx parent-child
 * [X] img lazy loading
 */

if ("loading" in HTMLImageElement.prototype) {
  console.log("El navegador soporta `lazy-loading`...");
} else {
  console.log("`lazy-loading` no soportado...");
}

// https://carlosazaustre.es/lazy-loading-image
