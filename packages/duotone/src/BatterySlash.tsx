import * as React from "react";
import { SVGProps } from "react";

const SvgBatterySlash = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="battery-slash_svg__fa-primary"
      d="M5.112 9.196C13.29-1.236 28.37-3.065 38.81 5.112L630.8 469.1c10.4 8.2 12.3 23.3 4.1 33.7-8.2 10.4-23.3 12.3-33.7 4.1L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196z"
    />
    <path
      d="M481.4 352H496c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H236.4l-81.6-64H496c44.2 0 80 35.8 80 80v16c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32v16c0 26.5-12.9 49.1-32.7 64.5L481.4 352zm-156.5 0 81.3 64H112c-44.18 0-80-35.8-80-80V176c0-16.4 4.92-31.6 13.35-44.3L96.5 172c-.33 1.3-1.4 2.6-1.4 4v160c0 8.8 8.1 16 16 16h213.8z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBatterySlash;
