import * as React from "react";
import { SVGProps } from "react";

const SvgBatteryExclamation = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="battery-exclamation_svg__fa-primary"
      d="M296 296c0 13.3-10.7 24-24 24s-24-10.7-24-24V120c0-13.3 10.7-24 24-24s24 10.7 24 24v176zm-56 88c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32z"
    />
    <path
      d="M80 96h128v64H80c-8.84 0-16 7.2-16 16v160c0 8.8 7.16 16 16 16h118.7c-4.3 9.8-6.7 20.6-6.7 32 0 11.4 2.4 22.2 6.7 32H80c-44.18 0-80-35.8-80-80V176c0-44.2 35.82-80 80-80zm272 288c0-11.4-2.4-22.2-6.7-32H464c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H336V96h128c44.2 0 80 35.8 80 80v16c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32v16c0 44.2-35.8 80-80 80H345.3c4.3-9.8 6.7-20.6 6.7-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBatteryExclamation;
