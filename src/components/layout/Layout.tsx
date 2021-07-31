import * as React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

export interface LayoutProps {}

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <title>Kanakoot</title>
      </Helmet>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
