import * as React from "react";
import { SVGProps } from "react";

const SvgDownFromLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="down-from-line_svg__fa-primary"
      d="M350 302.7c3.781 8.803 1.984 19.03-4.594 26l-136 144.1c-9.062 9.602-25.84 9.602-34.91 0l-136-144.1c-6.578-6.973-8.375-17.2-4.594-26C37.75 293.9 46.42 288.2 56 288.2h72V160.1c0-17.69 14.33-32.04 32-32.04h64c17.67 0 32 14.35 32 32.04v128.1h72c9.6 0 18.3 5.7 22 14.5z"
    />
    <path
      d="M351.1 32h-320C14.33 32 0 46.33 0 63.1 0 81.67 14.33 96 32 96h320c17.7 0 32-14.33 32-32s-14.3-32-32.9-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgDownFromLine;
