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

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <BrowserRouter>
      <DataLayer initialState={initialState} reducer={reducer}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="MyTrack" element={<MyTrack />} />
          <Route path="Search" element={<Search />} />
        </Routes>
      </DataLayer>
    </BrowserRouter>
  </RecoilRoot>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
