import * as React from "react";
import { SVGProps } from "react";

const SvgSlider = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="slider_svg__fa-primary"
      d="M352 96c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64h-32c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h32zm0 64h-32v192h32V160z"
    />
    <path
      d="M32 288c-17.67 0-32-14.3-32-32s14.33-32 32-32h192v64H32zm384 0v-64h64c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSlider;
