import React from "react";
import ReactDOM from "react-dom";
import { SpeechProvider } from '@speechly/react-client';
import { Provider } from "./context/context";
import App from "./App";
import "./index.css";
ReactDOM.render(
  <SpeechProvider appId="b7a459dc-d6e6-4084-9252-915115e47f22" language='en-US'>
  <Provider>
    <App />
  </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
