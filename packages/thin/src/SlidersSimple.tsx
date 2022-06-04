import * as React from "react";
import { SVGProps } from "react";

const SvgSlidersSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M504 360c4.4 0 8 3.6 8 8s-3.6 8-8 8H159.6c-4 40.4-38.1 72-79.6 72-44.18 0-80-35.8-80-80s35.82-80 80-80c41.5 0 75.6 31.6 79.6 72H504zm-488 8c0 35.3 28.65 64 64 64 35.3 0 64-28.7 64-64s-28.7-64-64-64c-35.35 0-64 28.7-64 64zm336.4-232c4-40.43 38.1-72 79.6-72 44.2 0 80 35.82 80 80 0 44.2-35.8 80-80 80-41.5 0-75.6-31.6-79.6-72H8c-4.418 0-8-3.6-8-8s3.582-8 8-8h344.4zm79.6 72c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64z" />
  </svg>
);

export default SvgSlidersSimple;
