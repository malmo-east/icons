import * as React from "react";
import { SVGProps } from "react";

const SvgArrowDownArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="arrow-down-arrow-up_svg__fa-primary"
      d="M237.6 328.7c13.03 11.95 13.9 32.22 1.969 45.27l-87.1 96.09c-12.12 13.26-35.06 13.26-47.19 0l-87.1-96.09c-11.94-13.05-11.06-33.31 1.969-45.27 13.59-12.46 33.8-10.48 45.22 1.969L96 366.1V64.03C96 46.33 110.3 32 128 32s32 14.33 32 32.03v302l32.4-35.4c12-12.93 32.2-13.83 45.2-1.93z"
    />
    <path
      d="m431.6 138-87.1-96.09c-12.12-13.26-35.06-13.26-47.19 0L210.21 138c-13.71 13.1-12.91 33.4.19 45.3 13.02 11.95 33.27 11.04 45.22-1.973L288 145.9v302c0 17.8 14.3 32.1 32 32.1s32-14.33 32-32.03V145.9l32.4 35.39c11.42 12.45 31.63 14.43 45.22 1.973C442.7 171.4 443.5 151.1 431.6 138z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgArrowDownArrowUp;
