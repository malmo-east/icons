import * as React from "react";
import { SVGProps } from "react";

const SvgFrame = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="frame_svg__fa-primary"
      d="M416 96c17.7 0 32 14.3 32 32s-14.3 32-32 32H128V96h288zM64 96v64H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h32zM32 416c-17.67 0-32-14.3-32-32s14.33-32 32-32h288v64H32zm352 0v-64h32c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32z"
    />
    <path
      d="M64 64c0-17.67 14.33-32 32-32 17.7 0 32 14.33 32 32v288H64V64zm0 352h64v32c0 17.7-14.3 32-32 32-17.67 0-32-14.3-32-32v-32zm320 32c0 17.7-14.3 32-32 32s-32-14.3-32-32V160h64v288zm0-352h-64V64c0-17.67 14.3-32 32-32s32 14.33 32 32v32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgFrame;
