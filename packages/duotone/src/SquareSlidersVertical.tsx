import * as React from "react";
import { SVGProps } from "react";

const SvgSquareSlidersVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="square-sliders-vertical_svg__fa-primary"
      d="M192 160c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.67 0-32-14.3-32-32s14.33-32 32-32h96zm160 128c17.7 0 32 14.3 32 32s-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32s14.3-32 32-32h96z"
    />
    <path
      d="M0 96c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm112 32v32H96c-17.67 0-32 14.3-32 32s14.33 32 32 32h16v160c0 17.7 14.3 32 32 32s32-14.3 32-32V224h16c17.7 0 32-14.3 32-32s-14.3-32-32-32h-16v-32c0-17.7-14.3-32-32-32s-32 14.3-32 32zm224 0c0-17.7-14.3-32-32-32s-32 14.3-32 32v160h-16c-17.7 0-32 14.3-32 32s14.3 32 32 32h16v32c0 17.7 14.3 32 32 32s32-14.3 32-32v-32h16c17.7 0 32-14.3 32-32s-14.3-32-32-32h-16V128z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSquareSlidersVertical;
