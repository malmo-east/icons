import * as React from "react";
import { SVGProps } from "react";

const SvgCompassSlash = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="compass-slash_svg__fa-primary"
      d="M5.112 9.194C13.29-1.238 28.37-3.067 38.81 5.11L630.8 469.1c10.4 8.2 12.3 23.3 4.1 33.7-8.2 10.4-23.3 12.3-33.7 4.1L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.194z"
    />
    <path
      d="m397.1 285.9 47.5-123.5c7.5-20.3-11.6-38.5-31-31l-143.3 55.1L134.2 79.88C180.9 30.68 246.8 0 320 0c141.4 0 256 114.6 256 256 0 50.1-14.9 98.5-40.6 138.4L397.1 285.9zM64 256c0-33.6 6.49-65.8 18.28-95.2L224.8 273.1l-29.4 76.5c-7.5 19.4 10.7 38.5 31 31l90.6-34.8 151.1 119C426.3 494.5 375.2 512 320 512 178.6 512 64 397.4 64 255.1v.9z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCompassSlash;
