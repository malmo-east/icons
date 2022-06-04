import * as React from "react";
import { SVGProps } from "react";

const SvgArrowDownSmallBig = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="arrow-down-small-big_svg__fa-primary"
      d="M237.6 328.7c13.03 11.95 13.9 32.22 1.969 45.27l-87.1 96.09c-12.12 13.26-35.06 13.26-47.19 0l-87.1-96.09c-11.94-13.05-11.06-33.31 1.969-45.27a31.872 31.872 0 0 1 21.61-8.414c8.672 0 17.3 3.5 23.61 10.38L96 366.1V64.03C96 46.33 110.3 32 128 32s32 14.33 32 32.03v302l32.4-35.4c12-12.93 32.2-13.83 45.2-1.93z"
    />
    <path
      d="M320 192h96c17.67 0 32-14.33 32-32V64c0-17.6-14.4-32-32-32h-96c-17.67 0-32 14.33-32 32v96c0 17.7 14.3 32 32 32zm160 64H320c-17.67 0-32 14.33-32 32v160c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V288c0-17.7-14.3-32-32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgArrowDownSmallBig;
