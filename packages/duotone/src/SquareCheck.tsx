import * as React from "react";
import { SVGProps } from "react";

const SvgSquareCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="square-check_svg__fa-primary"
      d="M339.8 172.2c10.9 10.9 10.9 28.7 0 39.6l-128 128c-10.9 10.9-28.7 10.9-39.6 0l-64-64c-10.93-10.9-10.93-28.7 0-39.6 10.9-10.9 28.7-10.9 39.6 0l44.2 44.2 108.2-108.2c10.9-10.9 28.7-10.9 39.6 0z"
    />
    <path
      d="M384 32c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h320zm-44.2 179.8c10.9-10.9 10.9-28.7 0-39.6-10.9-10.9-28.7-10.9-39.6 0L192 280.4l-44.2-44.2c-10.9-10.9-28.7-10.9-39.6 0-10.93 10.9-10.93 28.7 0 39.6l64 64c10.9 10.9 28.7 10.9 39.6 0l128-128z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSquareCheck;