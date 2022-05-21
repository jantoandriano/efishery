import React, { useState, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import LogoFish from "./assets/images/logo-fish-green.png";

import Home from "./pages/Home";

const App = () => {
  const [isCollapsed, setCollapsed] = useState(true);

  useEffect(() => {
    let localCollapsed = JSON.parse(
      localStorage.getItem("efishery:sidebarCollapse")
    );
    setCollapsed(localCollapsed);
  }, []);

  useEffect(() => {
    localStorage.setItem("efishery:sidebarCollapse", isCollapsed);
  }, [isCollapsed]);

  const handleCollapse = (e) => {
    setCollapsed(!isCollapsed);
  };

  return (
    <Router>
      <div className="wrapper">
        <SideBar isCollapsed={isCollapsed} onCollapsed={handleCollapse} />
        <div className="content">
          <Header
            onCollapsed={(e) => {
              handleCollapse(e);
            }}
            isCollapsed={isCollapsed}
          />
          <div className="content-page">
            <Suspense
              fallback={
                <div className="page-loading">
                  <img src={LogoFish} alt="logoFish" />
                </div>
              }
            >
              <Routes>
                <Route path="/" exact={true} element={<Home />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
