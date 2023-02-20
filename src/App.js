

import "./App.css";
import SplashScreen from "./pages/splash";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Sports from "./pages/sports/index";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 150);
  }, []);

  return loading ? (
    <SplashScreen />
  ) : (
    <div style={{ background: "black", width: "99vw", height: "100vh" }}>
      <Routes>
        <Route path="/" exact element={<Sports />} />
        <Route path="/sports" exact element={<Sports />} />
      </Routes>
    </div>
  );
}

export default App;
