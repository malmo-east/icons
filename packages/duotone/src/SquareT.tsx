import * as React from "react";
import { SVGProps } from "react";

const SvgSquareT = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="square-t_svg__fa-primary"
      d="M328 128H120c-13.2 0-24 10.8-24 24s10.8 24 24 24h80v184c0 13.3 10.8 24 24 24s24-10.75 24-24V176h80c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
    />
    <path
      d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm-56 144h-80v184c0 13.25-10.75 24-24 24s-24-10.75-24-24V176h-80c-13.2 0-24-10.7-24-24s10.8-24 24-24h208c13.3 0 24 10.8 24 24s-10.7 24-24 24z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSquareT;
