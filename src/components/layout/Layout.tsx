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
        <meta
          name="description"
          content="Use Kanakoot to share your group expenses easily. A simple yet fast calculator that takes your amount spent to give you directions to solve to who owes whom confusion."
        ></meta>
        <meta name="theme-color" content="#ffffff"></meta>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/site.webmanifest"></link>
      </Helmet>
      <Navbar /> {children} <Footer />
    </>
  );
}
