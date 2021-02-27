import React from "react";
import { Header } from "../";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className={`h-full w-8/12 mx-auto`}>{children}</div>
    </div>
  );
}

export default Layout;
