import * as React from "react";
import { SVGProps } from "react";

const SvgRectangleVerticalHistory = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="rectangle-vertical-history_svg__fa-primary"
      d="M192 64c0-35.35 28.7-64 64-64h256c35.3 0 64 28.65 64 64v384c0 35.3-28.7 64-64 64H256c-35.3 0-64-28.7-64-64V64z"
    />
    <path
      d="M144 72v368c0 13.3-10.7 24-24 24s-24-10.7-24-24V72c0-13.25 10.7-24 24-24s24 10.75 24 24zm-96 48v272c0 13.3-10.75 24-24 24S0 405.3 0 392V120c0-13.3 10.75-24 24-24s24 10.7 24 24z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgRectangleVerticalHistory;
