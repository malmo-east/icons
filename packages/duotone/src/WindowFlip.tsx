import * as React from "react";
import { SVGProps } from "react";

const SvgWindowFlip = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="window-flip_svg__fa-primary"
      d="M448 32c35.3 0 64 28.65 64 64v128H0V96c0-35.35 28.65-64 64-64h384zm0 96c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32zm-160 0c0 17.7 14.3 32 32 32s32-14.3 32-32-14.3-32-32-32-32 14.3-32 32zm-32 0c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32z"
    />
    <path
      d="M416 96c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zM0 224h512v192c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V224zm320-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgWindowFlip;
