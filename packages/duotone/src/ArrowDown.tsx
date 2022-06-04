import * as React from "react";
import { SVGProps } from "react";

const SvgArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="arrow-down_svg__fa-primary"
      d="M192 480c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 402.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 476.9 200.2 480 192 480z"
    />
    <path
      d="M160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l-32 32-32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgArrowDown;
