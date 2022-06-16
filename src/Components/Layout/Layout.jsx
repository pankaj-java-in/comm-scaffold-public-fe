import React from "react";
import "./Layout.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Features from "../Body/Features";
import ShowFaq from "../FAQ/ShowFaq";
import HelpingIndustries from "../Body/HelpingIndustries";

const Layout = () => {
  return (
    <div className="Layout">
        <Header/>
        <Features/>
        <HelpingIndustries/>
        <ShowFaq/>
        <Footer/>
    </div>
  );
};

export default Layout;
