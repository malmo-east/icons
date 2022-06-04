import * as React from "react";
import { SVGProps } from "react";

const SvgRoadBarrier = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="road-barrier_svg__fa-primary"
      d="M64 448c0 17.7-14.33 32-32 32S0 465.7 0 448V64c0-17.67 14.33-32 32-32s32 14.33 32 32v384zm576 0c0 17.7-14.3 32-32 32s-32-14.3-32-32V64c0-17.67 14.3-32 32-32s32 14.33 32 32v384z"
    />
    <path
      d="M309.2 288h-74.4l96-192h74.4l-96 192zM458.8 96h74.4l-96 192h-74.4l96-192zm-256 0h74.4l-96 192h-74.4l96-192zM576 117.7V288h-85.2L576 117.7zM64 96h85.2L64 266.3V96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgRoadBarrier;
