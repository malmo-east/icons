import * as React from "react";
import { SVGProps } from "react";

const SvgStop = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M384 128v255.1c0 35.35-28.65 64-64 64H64c-35.35 0-64-28.65-64-64V128c0-35.35 28.65-64 64-64h256c35.3 0 64 28.65 64 64z" />
  </svg>
);

export default SvgStop;
