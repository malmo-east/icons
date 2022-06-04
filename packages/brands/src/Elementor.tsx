import * as React from "react";
import { SVGProps } from "react";

const SvgElementor = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M.361 256C.361 397 114 511 255 511c142 0 256-114 256-255C511 116 397 2.05 255 2.05 114 2.05.361 116 .361 256zM192 150v213h-43V150h43zm42 0h128v43H234v-43zm128 85v43H234v-43h128zm-128 85h128v43H234v-43z" />
  </svg>
);

export default SvgElementor;