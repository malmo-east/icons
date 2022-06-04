import * as React from "react";
import { SVGProps } from "react";

const SvgDoorClosed = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M368 224c-17.62 0-32 14.38-32 32s14.38 32 32 32 32-14.38 32-32-14.4-32-32-32zm184 240h-72V64c0-35.2-28.8-64-64-64H160c-35.2 0-64 28.8-64 64v400H24c-13.25 0-24 10.7-24 24s10.75 24 24 24h528c13.25 0 24-10.75 24-24 0-13.3-10.7-24-24-24zm-120 0H144V64c0-8.838 7.164-16 16-16h256c8.836 0 16 7.162 16 16v400z" />
  </svg>
);

export default SvgDoorClosed;