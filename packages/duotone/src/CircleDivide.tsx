import * as React from "react";
import { SVGProps } from "react";

const SvgCircleDivide = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="circle-divide_svg__fa-primary"
      d="M288 160c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm-144 96c0-13.3 10.7-24 24-24h176c13.3 0 24 10.7 24 24s-10.7 24-24 24H168c-13.3 0-24-10.7-24-24zm80 96c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32z"
    />
    <path
      d="M0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm256-64c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm-88 40c-13.3 0-24 10.7-24 24s10.7 24 24 24h176c13.3 0 24-10.7 24-24s-10.7-24-24-24H168zm88 88c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCircleDivide;
