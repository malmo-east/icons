import * as React from "react";
import { SVGProps } from "react";

const SvgFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="flag_svg__fa-primary"
      d="M32 0C14.25 0 0 14.25 0 32v464c0 8.8 7.25 16 16 16h32c8.75 0 16-7.2 16-16V32C64 14.25 49.75 0 32 0z"
    />
    <path
      d="M512 30.73v301.4c0 12.25-7.947 23.75-20.63 28.75-43.95 17.12-80.05 23.09-111.1 23.09-73.63 0-124.9-31.78-198.6-31.78-32.97 0-70.91 7.057-116.8 25.51V32c0-2.695-.902-5.086-1.521-7.586 48.34-17.21 92.79-24.11 122.7-24.11 69.07.008 103.9 31.87 163.9 31.87 28.28 0 62.14-7.084 107.8-27.94C463.3 1.35 469.9 0 476.3 0c19 0 35.7 11.1 35.7 30.73z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgFlag;
