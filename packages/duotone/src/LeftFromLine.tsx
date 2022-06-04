import * as React from "react";
import { SVGProps } from "react";

const SvgLeftFromLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="left-from-line_svg__fa-primary"
      d="M351.9 223.1v64c0 17.67-14.35 32-32.04 32H191.8v72a24.03 24.03 0 0 1-14.51 22.05c-8.803 3.781-19.03 1.984-26-4.594L7.201 273.5c-9.602-9.062-9.602-25.84 0-34.91l144.1-136a23.988 23.988 0 0 1 25.999-4.64c8.8 3.75 14.5 12.45 14.5 21.15v72h128.1c17.7 0 32 15.2 32 32z"
    />
    <path
      d="M415.1 63.99c-16.8 0-31.1 14.33-31.1 32v320c0 17.71 14.3 32.01 31.1 32.01 18.6 0 32.9-14.3 32.9-32V95.99c0-17.67-14.3-32-32.9-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgLeftFromLine;
