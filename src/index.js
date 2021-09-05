import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SimpleReactLightbox from "simple-react-lightbox";
// import "react-image-lightbox/style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import './i18n';
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from 'redux-persist/integration/react'
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <SimpleReactLightbox>
            <App />
          </SimpleReactLightbox>
        </PersistGate>
      </Provider>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
