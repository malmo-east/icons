import * as React from "react";
import { SVGProps } from "react";

const SvgTruckRamp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="truck-ramp_svg__fa-primary"
      d="M48.41 502.9c-17.05 4.6-34.64-5.4-39.284-22.5-4.646-17 5.414-34.6 22.464-39.3L352 353.8V64c0-35.35 28.7-64 64-64h224v331.3c-23.5-26.5-57.8-43.3-96-43.3-66.1 0-120.6 50.2-127.3 114.5L48.41 502.9z"
    />
    <path
      d="M640 416c0 53-43 96-96 96-53.9 0-96-43-96-96 0-53.9 42.1-96 96-96 53 0 96 42.1 96 96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTruckRamp;
