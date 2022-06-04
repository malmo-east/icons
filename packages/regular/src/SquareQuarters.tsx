import * as React from "react";
import { SVGProps } from "react";

const SvgSquareQuarters = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.64 32 0 60.64 0 96v320c0 35.36 28.64 64 64 64h320c35.36 0 64-28.64 64-64V96c0-35.36-28.6-64-64-64zm11.3 395.3c-2.9 2.9-6.9 4.7-11.3 4.7H64c-4.416 0-8.416-1.793-11.33-4.672L224 256 52.67 84.67C55.58 81.79 59.58 80 64 80h320c4.416 0 8.416 1.791 11.33 4.672L224 256l171.3 171.3z" />
  </svg>
);

export default SvgSquareQuarters;