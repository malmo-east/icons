import * as React from "react";
import { SVGProps } from "react";

const SvgAlt = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M416 440a8 8 0 0 0 8 8h208a8 8 0 0 0 0-16H424c-4.4 0-8 3.6-8 8zM640 72c0-4.41-3.6-8-8-8H495.2c-22.31 0-42.97 10.06-56.72 27.62L188.9 410.5c-10.7 13.7-26.7 21.5-44.1 21.5H8c-4.406 0-8 3.6-8 8s3.594 8 8 8h136.8c22.31 0 42.97-10.06 56.72-27.62l249.6-318.9C461.8 87.84 477.8 80 495.2 80H632c4.4 0 8-3.59 8-8z" />
  </svg>
);

export default SvgAlt;
