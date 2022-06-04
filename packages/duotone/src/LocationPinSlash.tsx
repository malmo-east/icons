import * as React from "react";
import { SVGProps } from "react";

const SvgLocationPinSlash = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="location-pin-slash_svg__fa-primary"
      d="M5.112 9.194C13.29-1.238 28.37-3.067 38.81 5.11L630.8 469.1c10.4 8.2 12.3 23.3 4.1 33.7-8.2 10.4-23.3 12.3-33.7 4.1L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.194z"
    />
    <path
      d="M154 95.42C187.3 38.35 249.2 0 319.1 0 426 0 512 85.96 512 192c0 38.7-23 90.8-53 142.5L154 95.42zM296.3 499.2c-50.4-63-164-214-168.2-302.3l278.1 219.2c-23.5 33.4-46.3 62.8-62.5 83.1-12.3 15.3-35.1 15.3-47.4 0z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgLocationPinSlash;
