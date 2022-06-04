import * as React from "react";
import { SVGProps } from "react";

const SvgRightToLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="right-to-line_svg__fa-primary"
      d="M.023 287.1v-64c0-17.67 14.34-32 32.02-32H160.1l.034-72a24.03 24.03 0 0 1 14.51-22.05c8.803-3.781 19.03-1.984 26 4.594l144.1 136c9.602 9.062 9.602 25.84 0 34.91l-144.1 136c-6.973 6.578-17.2 8.375-26 4.594C165.8 410.3 160.1 401.6 160.1 392v-72.9H32.05c-17.69 0-32.027-13.4-32.027-32z"
    />
    <path
      d="M415.1 63.99c-16.8 0-31.1 14.33-31.1 32v320c0 17.71 14.3 32.01 31.1 32.01 18.6 0 32.9-14.3 32.9-32V95.99c0-17.67-14.3-32-32.9-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgRightToLine;
