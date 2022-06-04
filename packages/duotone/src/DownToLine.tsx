import * as React from "react";
import { SVGProps } from "react";

const SvgDownToLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="down-to-line_svg__fa-primary"
      d="M350 206.6c3.781 8.803 1.984 19.03-4.594 26l-136 144.1c-9.062 9.601-25.84 9.601-34.91 0l-136-144.1c-6.526-6.9-8.326-17.2-4.546-26 3.8-8.8 12.47-14.5 22.05-14.5h72V64.03c0-17.69 14.33-32.02 32-32.02h64c17.67 0 32 14.34 32 32.02v128.1l72 .031c9.6-.061 18.3 5.639 22 14.439z"
    />
    <path
      d="M352 416H31.1C14.33 416 0 430.3 0 447.1S14.33 480 31.1 480H352c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgDownToLine;
