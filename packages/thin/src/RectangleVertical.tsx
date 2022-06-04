import * as React from "react";
import { SVGProps } from "react";

const SvgRectangleVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M384 448c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V64C0 28.65 28.65 0 64 0h256c35.3 0 64 28.65 64 64v384zm-16 0V64c0-26.51-21.5-48-48-48H64c-26.51 0-48 21.49-48 48v384c0 26.5 21.49 48 48 48h256c26.5 0 48-21.5 48-48z" />
  </svg>
);

export default SvgRectangleVertical;
