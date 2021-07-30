import * as React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export interface LayoutProps {}

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
