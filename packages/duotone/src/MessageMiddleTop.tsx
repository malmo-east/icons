import * as React from "react";
import { SVGProps } from "react";

const SvgMessageMiddleTop = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      d="M512 160v287.1c0 36.2-28.7 64.9-64 64.9H64c-35.25 0-64-28.75-64-63.99V160c0-35.25 28.75-63.1 64-63.1h111.1l67.22-89.63C246.4 2.134 251.2 0 256 0s9.601 2.134 12.8 6.4l67.22 89.63H448c35.3 0 64 28.77 64 63.97z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgMessageMiddleTop;