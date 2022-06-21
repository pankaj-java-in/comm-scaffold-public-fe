import React from "react";
import "./Layout.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Features from "../Body/Features";
import ShowFaq from "../FAQ/ShowFaq";
import HelpingIndustries from "../Body/HelpingIndustries";
import Implementation from "../Body/Implementation";
import Advantage from "../Body/Advantange";
import Security from "../Body/Security";
import Benefits from "../Body/Benefits";
// import { Feature } from "../Body/Feature";
import Industry from "../Body/Industry";
import RequestDemo from "../Body/RequestDemo";
import PrivateMeeting from "../Body/PrivateMeeting";

const Layout = () => {
  return (
    <div className="Layout">
        <Header/>
        <PrivateMeeting/>
        <Benefits/>
        <Features/>
        <Implementation/>
        <Security/>
        <Industry/>
        <HelpingIndustries/>
        <ShowFaq/>
        <RequestDemo/>
        <Advantage/>
        <Footer/>
    </div>
  );
};

export default Layout;
