"use client";
import dynamic from "next/dynamic";
import ReactSpline from "@splinetool/react-spline";
import "./spline.css";
import { useRef } from "react";

function Spline({ scene = "" }) {
  return <ReactSpline scene={scene} style={{ width: "100%" }} />;
}

export default dynamic(() => Promise.resolve(Spline), {
  ssr: false,
});
