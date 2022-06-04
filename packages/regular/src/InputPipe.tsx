import * as React from "react";
import { SVGProps } from "react";

const SvgInputPipe = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M144 328c0 13.3-10.7 24-24 24s-24-10.7-24-24V184c0-13.3 10.7-24 24-24s24 10.7 24 24v144zM0 128c0-35.35 28.65-64 64-64h512c35.3 0 64 28.65 64 64v256c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128zm48 0v256c0 8.8 7.16 16 16 16h512c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H64c-8.84 0-16 7.2-16 16z" />
  </svg>
);

export default SvgInputPipe;