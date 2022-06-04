import * as React from "react";
import { SVGProps } from "react";

const SvgRectangleVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M384 448c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V64C0 28.65 28.65 0 64 0h256c35.3 0 64 28.65 64 64v384zm-48 0V64c0-8.84-7.2-16-16-16H64c-8.84 0-16 7.16-16 16v384c0 8.8 7.16 16 16 16h256c8.8 0 16-7.2 16-16z" />
  </svg>
);

export default SvgRectangleVertical;