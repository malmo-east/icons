import * as React from "react";
import { SVGProps } from "react";

const SvgBatteryFull = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="battery-full_svg__fa-primary"
      d="M96 192h352v128H96V192z"
    />
    <path
      d="M464 96c44.2 0 80 35.8 80 80v16c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32v16c0 44.2-35.8 80-80 80H80c-44.18 0-80-35.8-80-80V176c0-44.2 35.82-80 80-80h384zM64 336c0 8.8 7.16 16 16 16h384c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H80c-8.84 0-16 7.2-16 16v160z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBatteryFull;