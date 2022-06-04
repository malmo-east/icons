import * as React from "react";
import { SVGProps } from "react";

const SvgDiceD8 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 256c0-8.625-3.305-17.25-9.868-23.88l-222.2-222.3C273.3 3.262 264.6 0 256 0s-17.3 3.262-23.9 9.887L9.868 232.1C3.305 238.8 0 247.4 0 256s3.305 17.3 9.868 23.9l222.2 222.3C238.7 508.7 247.4 512 256 512s17.26-3.262 23.89-9.887l222.2-222.3C508.7 273.2 512 264.7 512 256zM280 77.88l166.4 166.4L280 315.66V77.88zM231.1 315.6 65.6 244.2 231.1 77.88V315.6zm0 52.3v66.25l-116-116 116 49.75zm48.9 0 116-49.75-116 116V367.9z" />
  </svg>
);

export default SvgDiceD8;