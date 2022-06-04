import * as React from "react";
import { SVGProps } from "react";

const SvgArrowDownToLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="arrow-down-to-line_svg__fa-primary"
      d="M86.63 169.4 160 242.8V64c0-17.69 14.31-32 32-32s32 14.31 32 32v178.8l73.38-73.38C303.6 163.1 311.8 160 320 160s16.38 3.125 22.62 9.375c12.5 12.5 12.5 32.75 0 45.25l-128 128c-12.5 12.5-32.75 12.5-45.25 0l-128-128c-12.5-12.5-12.5-32.75 0-45.25s32.76-12.475 45.26.025z"
    />
    <path
      d="M352 416H32c-17.69 0-32 14.31-32 32s14.31 32 32 32h320c17.69 0 32-14.31 32-32s-14.3-32-32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgArrowDownToLine;
