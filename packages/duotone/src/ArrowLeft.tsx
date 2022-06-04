import * as React from "react";
import { SVGProps } from "react";

const SvgArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="arrow-left_svg__fa-primary"
      d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"
    />
    <path
      d="M447.1 256c0 17.7-13.4 32-31.1 32H109.3l-32-32 32-32H416c17.7 0 31.1 14.3 31.1 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgArrowLeft;
