import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { DataLayer } from "./DataLayer";
import reducer, { initialState } from "./reducer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyTrack from "./My/MyTrack";
import Search from "./Search/Search";
import { RecoilRoot } from "recoil";
import { MainChart } from "./Chart/MainChart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <DataLayer initialState={initialState} reducer={reducer}>
      <RecoilRoot>
        <Routes basename={process.env.PUBLIC_URL}>
          <Route path="/" element={<App />} />
          <Route path="MyTrack" element={<MyTrack />} />
          <Route path="Search" element={<Search />} />
          <Route path="chart/:id" element={<MainChart />} />
        </Routes>
      </RecoilRoot>
    </DataLayer>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
