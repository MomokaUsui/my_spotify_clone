import React from "react";
import MySidebar from "./MySidebar";
import { useDataLayerValue } from "../DataLayer";
import MyBody from "./MyBody";
import "../MyTrack.css";
import Footer from "../Components/Footer";

function MyTrack() {
  return (
    <div>
      <div className="myTrack">
        <MySidebar />
        <MyBody />
      </div>
      <Footer />
    </div>
  );
}

export default MyTrack;
