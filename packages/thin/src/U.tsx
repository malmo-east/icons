import * as React from "react";
import { SVGProps } from "react";

const SvgU = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M192 480C86.1 480 0 393.87 0 288V40c0-4.41 3.578-8 8-8s8 3.59 8 8v248c0 97.03 78.95 176 176 176s176-78.97 176-176V40c0-4.41 3.6-8 8-8s8 3.59 8 8v248c0 105.9-86.1 192-192 192z" />
  </svg>
);

export default SvgU;
