import * as React from "react";
import { SVGProps } from "react";

const SvgIntersection = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M384 224v248c0 4.406-3.578 8-8 8s-8-3.594-8-8V224c0-97.03-78.95-176-176-176S16 126.1 16 224v248c0 4.4-3.58 8-8 8s-8-3.6-8-8V224C0 118.1 86.13 32 192 32s192 86.1 192 192z" />
  </svg>
);

export default SvgIntersection;
