import * as React from "react";
import { SVGProps } from "react";

const SvgArrowDownLong = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path
      className="arrow-down-long_svg__fa-primary"
      d="M310.6 329.4c12.5 12.5 12.5 32.75 0 45.25l-128 128c-12.5 12.5-32.75 12.5-45.25 0l-128-128c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 434.8l105.4-105.4c6.2-6.3 14.4-9.4 22.6-9.4s16.4 3.1 22.6 9.4z"
    />
    <path
      d="m160 434.8-32-32V32c0-17.69 14.31-32 32-32s32 14.31 32 32v370.8l-32 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgArrowDownLong;
