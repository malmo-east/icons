import * as React from "react";
import { SVGProps } from "react";

const SvgTabletScreen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M176 456h96c4.406 0 8-3.578 8-8s-3.594-8-8-8h-96c-4.406 0-8 3.578-8 8s3.6 8 8 8zM400 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm32 464c0 17.64-14.36 32-32 32H48c-17.64 0-32-14.36-32-32v-64h416v64zm0-80H16V48c0-17.64 14.36-32 32-32h352c17.64 0 32 14.36 32 32v336z" />
  </svg>
);

export default SvgTabletScreen;
