import * as React from "react";
import { SVGProps } from "react";

const SvgUpToLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="up-to-line_svg__fa-primary"
      d="M33.95 305.4c-3.78-8.8-1.98-19.1 4.6-26l136-144.1c9.062-9.602 25.84-9.602 34.91 0l136 144.1c6.578 6.973 8.375 17.2 4.594 26-3.754 8.8-12.454 14.5-22.054 14.5h-72V448c0 17.69-14.33 32.02-32 32.02h-64c-17.67 0-32-14.34-32-32.02V319.9H56c-9.58 0-18.25-5.7-22.05-14.5z"
    />
    <path
      d="M351.1 32h-320C14.33 32 0 46.33 0 63.1 0 81.67 14.33 96 32 96h320c17.7 0 32-14.33 32-32s-14.3-32-32.9-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgUpToLine;
