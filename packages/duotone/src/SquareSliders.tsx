import * as React from "react";
import { SVGProps } from "react";

const SvgSquareSliders = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="square-sliders_svg__fa-primary"
      d="M192 224c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96c0-17.7 14.3-32 32-32s32 14.3 32 32v96zm128 160c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96c0-17.7 14.3-32 32-32s32 14.3 32 32v96z"
    />
    <path
      d="M64 480c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64zm320-144c0-17.7-14.3-32-32-32h-32v-16c0-17.7-14.3-32-32-32s-32 14.3-32 32v16H96c-17.67 0-32 14.3-32 32s14.33 32 32 32h160v16c0 17.7 14.3 32 32 32s32-14.3 32-32v-16h32c17.7 0 32-14.3 32-32zM192 144v-16c0-17.7-14.3-32-32-32s-32 14.3-32 32v16H96c-17.67 0-32 14.3-32 32s14.33 32 32 32h32v16c0 17.7 14.3 32 32 32s32-14.3 32-32v-16h160c17.7 0 32-14.3 32-32s-14.3-32-32-32H192z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSquareSliders;
