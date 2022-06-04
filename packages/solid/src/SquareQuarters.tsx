import * as React from "react";
import { SVGProps } from "react";

const SvgSquareQuarters = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.64 32 0 60.64 0 96v320c0 35.36 28.64 64 64 64h320c35.36 0 64-28.64 64-64V96c0-35.36-28.6-64-64-64zm0 384H64l160-160L64 96h320L224 256l160 160z" />
  </svg>
);

export default SvgSquareQuarters;
