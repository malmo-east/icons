import * as React from "react";
import { SVGProps } from "react";

const SvgEraser = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="eraser_svg__fa-primary"
      d="M150.1 166.1 258.7 57.37c25-24.99 65.6-24.99 90.6 0L486.6 194.7c25 25 25 65.6 0 90.6L377.9 393.9 150.1 166.1z"
    />
    <path
      d="M355.9 416H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H150.6c-16.9 0-33.2-6.7-45.2-18.7l-80.03-80c-24.991-25-24.991-65.6 0-90.6L150.1 166.1l45.2 45.2L70.63 336l79.97 80h114.8l67.3-67.3 45.2 45.2-22 22.1z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgEraser;
