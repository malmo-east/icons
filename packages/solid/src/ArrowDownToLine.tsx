import * as React from "react";
import { SVGProps } from "react";

const SvgArrowDownToLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M297.4 169.4 224 242.8V64c0-17.69-14.31-32-32-32s-32 14.31-32 32v178.8l-73.37-73.4C80.38 163.1 72.19 160 64 160s-16.37 3.1-22.62 9.4c-12.5 12.5-12.5 32.75 0 45.25l128 128c12.5 12.5 32.75 12.5 45.25 0l128-128c12.5-12.5 12.5-32.75 0-45.25s-32.73-12.5-45.23 0zM352 416H32c-17.69 0-32 14.31-32 32s14.31 32 32 32h320c17.69 0 32-14.31 32-32s-14.3-32-32-32z" />
  </svg>
);

export default SvgArrowDownToLine;
