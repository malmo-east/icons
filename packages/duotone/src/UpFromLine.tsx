import * as React from "react";
import { SVGProps } from "react";

const SvgUpFromLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="up-from-line_svg__fa-primary"
      d="M33.95 209.3c-3.781-8.803-1.984-19.03 4.594-26l136-144.1c9.062-9.601 25.84-9.601 34.91 0l136 144.1a24.063 24.063 0 0 1 4.594 26C346.3 218.1 337.6 223.8 328 223.8h-72v128.1c0 17.69-14.33 32.04-32 32.04h-64c-17.67 0-32-14.35-32-32.04V223.8H56c-9.58 0-18.25-5.7-22.05-14.5z"
    />
    <path
      d="M352 416H31.1C14.33 416 0 430.3 0 447.1S14.33 480 31.1 480H352c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgUpFromLine;
