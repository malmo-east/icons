import * as React from "react";
import { SVGProps } from "react";

const SvgTabletButton = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="tablet-button_svg__fa-primary"
      d="M448 64v320H0V64C0 28.65 28.65 0 64 0h320c35.3 0 64 28.65 64 64z"
    />
    <path
      d="M0 384v64c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64v-64H0zm224 96c-17.75 0-32-14.25-32-32s14.25-32 32-32 32 14.25 32 32-14.2 32-32 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTabletButton;
