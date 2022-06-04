import * as React from "react";
import { SVGProps } from "react";

const SvgArrowLeftLong = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="arrow-left-long_svg__fa-primary"
      d="M182.6 406.6c-12.5 12.5-32.75 12.5-45.25 0l-128-128c-12.5-12.5-12.5-32.75 0-45.25l128-128c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l105.4 105.4c6.25 6.2 9.35 14.4 9.35 22.6s-3.1 16.4-9.4 22.6z"
    />
    <path
      d="m77.25 256 32-32H480c17.69 0 32 14.31 32 32s-14.31 32-32 32H109.3l-32.05-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgArrowLeftLong;
