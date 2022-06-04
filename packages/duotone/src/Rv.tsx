import * as React from "react";
import { SVGProps } from "react";

const SvgRv = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="rv_svg__fa-primary"
      d="M224 16c0-8.836 7.2-16 16-16h128c8.8 0 16 7.164 16 16v16h128c53 0 96 42.98 96 96 0 17.7-14.3 32-32 32H384v256H266.5c-13.1-37.3-48.7-64-90.5-64-38.9 0-72.5 23.2-87.52 56.5l-69.73-69.8C6.743 326.7 0 310.5 0 293.5V96c0-35.35 28.65-64 64-64h160V16zM96 208c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16v64zm320-16h100.6c12.9 0 25.4 4.5 35.4 12.7l67.5 55.1c13 10.7 20.5 26.6 20.5 43.4V384c0 17.7-14.3 32-32 32h-21.5c-13.1-37.3-48.7-64-90.5-64-33.4 0-62.8 17-80 42.9V192zm105.6 49.8c-1.4-1.2-3.2-1.8-5-1.8H464v48h114.1l-56.5-46.2z"
    />
    <path
      d="M112 448c0-35.3 28.7-64 64-64s64 28.7 64 64-28.7 64-64 64-64-28.7-64-64zm320 0c0-35.3 28.7-64 64-64s64 28.7 64 64-28.7 64-64 64-64-28.7-64-64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgRv;