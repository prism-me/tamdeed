import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Layout from "./layouts/Layout";
import Navigation from "./navigator/Navigation";
import ScrollToTop from "./utils/ScrollToTop";
// import { Suspense } from "react";
import BounceLoader from "react-spinners/BounceLoader";

function App() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setLoader(false);
  });
  return (
    <BrowserRouter>
      {loader ? (
        <div
          className={`d-flex flex-column text-center align-items-center justify-content-center`}
          style={{
            position: "absolute",
            zIndex: 99999,
            height: "100%",
            width: "100%",
            background: "#2c8f8f8f",
          }}>
          <BounceLoader color={"#2C8F8F"} size={100} />
        </div>
      ) : (
        <>
          <ScrollToTop />
          <Layout>
            <Navigation />
          </Layout>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
