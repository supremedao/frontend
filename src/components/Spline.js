"use client";
import { lazy, Suspense } from "react";
import dynamic from "next/dynamic";
const ReactSpline = lazy(() => import("@splinetool/react-spline"));

function Spline({ scene = "" }) {
  return (
    <Suspense
      fallback={
        <div className={"flex items-center justify-center "}>
          <span className="inline-flex h-10 w-10 animate-ping rounded-full bg-sky-400 opacity-75" />
        </div>
      }
    >
      <div className="transform-gpu">
        <ReactSpline scene={scene} style={{ width: "100%" }} />
      </div>
    </Suspense>
  );
}

export default dynamic(() => Promise.resolve(Spline), {
  ssr: false,
});
