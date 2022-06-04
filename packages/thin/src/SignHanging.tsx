import * as React from "react";
import { SVGProps } from "react";

const SvgSignHanging = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M72 0a8 8 0 0 1 8 8v56h424c4.4 0 8 3.58 8 8s-3.6 8-8 8H80v424c0 4.4-3.58 8-8 8s-8-3.6-8-8V80H8a8 8 0 0 1-8-8 8 8 0 0 1 8-8h56V8a8 8 0 0 1 8-8zm56 160c0-17.7 14.3-32 32-32h288c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160zm16 0v192c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16H160c-8.8 0-16 7.2-16 16z" />
  </svg>
);

export default SvgSignHanging;
