import * as React from "react";
import { SVGProps } from "react";

const SvgGripLinesVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" {...props}>
    <path d="M40 40v432c0 4.4-3.58 8-8 8s-8-3.6-8-8V40c0-4.42 3.58-8 8-8s8 3.58 8 8zm128 0v432c0 4.4-3.6 8-8 8s-8-3.6-8-8V40c0-4.42 3.6-8 8-8s8 3.58 8 8z" />
  </svg>
);

export default SvgGripLinesVertical;
