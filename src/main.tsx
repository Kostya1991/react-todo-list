import {StrictMode} from "react";
import {createRoot} from "react-dom/client";

import "./index.css";
import {Provider} from "react-redux";
import {rootReducer} from "./store/index.ts";
import {createStore} from "redux";
import {Root} from "./components/root/Root.tsx";

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </StrictMode>,
);
