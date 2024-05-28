import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";

function MainLayout({ children }) {
  return (
    <div>
      <Navbar />

      {children}
      {/* <Footer /> */}
    </div>
  );
}

export default MainLayout;
