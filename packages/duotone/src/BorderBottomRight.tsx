import * as React from "react";
import { SVGProps } from "react";

const SvgBorderBottomRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="border-bottom-right_svg__fa-primary"
      d="M416 32c17.7 0 32 14.33 32 32v336c0 44.2-35.8 80-80 80H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h336c8.8 0 16-7.2 16-16V64c0-17.67 14.3-32 32-32z"
    />
    <path
      d="M0 352c0-17.7 14.33-32 32-32s32 14.3 32 32-14.33 32-32 32-32-14.3-32-32zm0-96c0-17.7 14.33-32 32-32s32 14.3 32 32-14.33 32-32 32-32-14.3-32-32zM320 32c17.7 0 32 14.33 32 32s-14.3 32-32 32-32-14.33-32-32 14.3-32 32-32zm-192 0c17.7 0 32 14.33 32 32s-14.3 32-32 32-32-14.33-32-32 14.3-32 32-32zm64 32c0-17.67 14.3-32 32-32s32 14.33 32 32-14.3 32-32 32-32-14.33-32-32zM32 32c17.67 0 32 14.33 32 32S49.67 96 32 96 0 81.67 0 64s14.33-32 32-32zm0 96c17.67 0 32 14.3 32 32s-14.33 32-32 32-32-14.3-32-32 14.33-32 32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBorderBottomRight;
