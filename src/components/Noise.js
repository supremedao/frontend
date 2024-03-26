"use client";

import Script from "next/script";
import { useRef } from "react";

function Noise() {
  const noiseRef = useRef();
  return (
    <>
      <canvas ref={noiseRef} className="noise-bg" />
      {/*<Script*/}
      {/*  src="/libs/noise.js"*/}
      {/*  onLoad={() => {*/}
      {/*    new Grain(noiseRef.current);*/}
      {/*  }}*/}
      {/*/>*/}
    </>
  );
}

export default Noise;
