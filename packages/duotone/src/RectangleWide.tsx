import * as React from "react";
import { SVGProps } from "react";

const SvgRectangleWide = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      d="M0 128c0-35.35 28.65-64 64-64h512c35.3 0 64 28.65 64 64v256c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgRectangleWide;
