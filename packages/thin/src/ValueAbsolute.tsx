import * as React from "react";
import { SVGProps } from "react";

const SvgValueAbsolute = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M8 32c-4.406 0-8 3.59-8 8v432c0 4.4 3.594 8 8 8s8-3.594 8-8V40c0-4.41-3.59-8-8-8zm496 0c-4.406 0-8 3.594-8 8v432c0 4.406 3.594 8 8 8s8-3.6 8-8V40c0-4.41-3.6-8-8-8zm-122.3 98.3a7.994 7.994 0 0 0-11.31 0L256 244.7 141.7 130.3c-3.125-3.125-8.188-3.125-11.31 0s-3.125 8.188 0 11.31L244.7 256 130.4 370.3a7.994 7.994 0 0 0 0 11.31c1.5 1.59 3.5 2.39 5.6 2.39s4.094-.781 5.656-2.344L256 267.3l114.3 114.3c1.6 1.6 3.6 2.4 5.7 2.4s4.094-.781 5.656-2.344a7.994 7.994 0 0 0 0-11.31L267.3 256l114.3-114.3c3.2-3.2 3.2-8.2.1-11.4z" />
  </svg>
);

export default SvgValueAbsolute;