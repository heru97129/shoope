import { Footer } from "../footer/Footer";
import React from "react";
import { Menu } from "../menu/Menu";

const Layout = ({ children }) => {
  return (
    <>
      <Menu />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
