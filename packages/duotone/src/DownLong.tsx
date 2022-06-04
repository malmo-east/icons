import * as React from "react";
import { SVGProps } from "react";

const SvgDownLong = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path
      className="down-long_svg__fa-primary"
      d="M264 351.9H56c-9.547 0-18.19 5.66-21.1 14.42a24.046 24.046 0 0 0 4.404 25.94l104 112.1c9.5 10.24 25.69 10.24 35.19 0l104-112.1a24.051 24.051 0 0 0 4.408-25.94C282.2 357.6 273.5 351.9 264 351.9z"
    />
    <path
      d="M128 351.9V32c0-17.69 14.33-32 32-32s32 14.31 32 32v319.9h-64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgDownLong;
