import * as React from "react";
import { SVGProps } from "react";

const SvgSquareMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="square-minus_svg__fa-primary"
      d="M112 256c0-13.3 10.7-24 24-24h176c13.3 0 24 10.7 24 24s-10.7 24-24 24H136c-13.3 0-24-10.7-24-24z"
    />
    <path
      d="M384 32c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h320zM136 232c-13.3 0-24 10.7-24 24s10.7 24 24 24h176c13.3 0 24-10.7 24-24s-10.7-24-24-24H136z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSquareMinus;
