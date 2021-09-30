import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Layout from "./layouts/Layout";
import Navigation from "./navigator/Navigation";
import ScrollToTop from "./utils/ScrollToTop";
import { Suspense } from "react";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <ScrollToTop />
        <Layout>
          <Navigation />
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
