import * as React from "react";
import { SVGProps } from "react";

const SvgSquareD = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="square-d_svg__fa-primary"
      d="M222.4 128H152c-13.2 0-24 10.8-24 24v208c0 13.3 10.8 24 24 24h70.41C293.9 384 352 326.6 352 256s-58.1-128-129.6-128zm0 208H176V176h46.41c44.99 0 81.59 35.9 81.59 80s-36.6 80-81.6 80z"
    />
    <path
      d="M304 256c0 44.13-36.61 80-81.59 80H176V176h46.41c44.99 0 81.59 35.9 81.59 80zM448 96v320c0 35.35-28.65 64-64 64H64c-35.35 0-64-28.65-64-64V96c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64zm-96 160c0-70.58-58.14-128-129.6-128H152c-13.2 0-24 10.8-24 24v208c0 13.3 10.8 24 24 24h70.41C293.9 384 352 326.6 352 256z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSquareD;
