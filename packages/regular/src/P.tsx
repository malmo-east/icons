import * as React from "react";
import { SVGProps } from "react";

const SvgP = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M24 480c-13.25 0-24-10.7-24-24V56c0-13.25 10.75-24 24-24h144c83.8 0 152 68.2 152 152s-68.19 152-152 152H48v120c0 13.3-10.75 24-24 24zm24-192h120c57.34 0 104-46.66 104-104S225.3 80 168 80H48v208z" />
  </svg>
);

export default SvgP;
