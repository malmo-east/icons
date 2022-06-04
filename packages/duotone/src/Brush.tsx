import * as React from "react";
import { SVGProps } from "react";

const SvgBrush = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="brush_svg__fa-primary"
      d="M0 288h384v32c0 35.3-28.7 64-64 64h-64v64c0 35.3-28.7 64-64 64s-64-28.7-64-64v-64H64c-35.35 0-64-28.7-64-64v-32zm192 176c8.8 0 16-7.2 16-16s-7.2-16-16-16-16 7.2-16 16 7.2 16 16 16z"
    />
    <path
      d="m160 0 32 64 32-64h112c26.5 0 48 21.49 48 48v240H0V48C0 21.49 21.49 0 48 0h16l32 64 32-64h32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBrush;