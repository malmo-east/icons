import * as React from "react";
import { SVGProps } from "react";

const SvgTablet = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="tablet_svg__fa-primary"
      d="M448 64v320H0V64C0 28.65 28.65 0 64 0h320c35.3 0 64 28.65 64 64z"
    />
    <path
      d="M0 384v64c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64v-64H0zm288 63.1c0 9.7-7.2 16.9-16 16.9h-96.9c-7.9 0-15.1-7.2-15.1-16s7.2-16 15.1-16h96c9.7 0 16.9 7.2 16.9 15.1z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTablet;
