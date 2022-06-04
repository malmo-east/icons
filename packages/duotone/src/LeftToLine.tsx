import * as React from "react";
import { SVGProps } from "react";

const SvgLeftToLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="left-to-line_svg__fa-primary"
      d="m103.3 238.5 144.1-136a24.064 24.064 0 0 1 26-4.594c8.8 3.894 14.5 12.494 14.5 22.094v72H416c17.69 0 32.02 14.33 32.02 32v64c0 17.67-14.34 32-32.02 32H287.9l-.031 72c0 9.578-5.708 18.25-14.51 22.05-8.805 3.781-19.03 1.984-26-4.594l-144.1-136C93.66 264.4 93.66 247.6 103.3 238.5z"
    />
    <path
      d="M32 64C14.33 64 0 78.33 0 95.1V416c0 17.7 14.33 32 31.1 32S64 433.7 64 416V95.1C64 78.33 49.67 64 32 64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgLeftToLine;
