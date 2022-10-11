// REACT < 17
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// CONTEXT
import { MonstersProvider } from "./context/MonstersContext";
import { SnackBarProvider } from "./context/SnackBarContext";
import { SearchProvider } from "./context/SearchContext";

// STYLES
import "bootstrap/dist/css/bootstrap.css";
import "./styles.scss";
import { AuthProvider } from "./context/AuthContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
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
  </React.StrictMode>,
  rootElement
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
