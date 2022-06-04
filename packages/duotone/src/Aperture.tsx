import * as React from "react";
import { SVGProps } from "react";

const SvgAperture = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="aperture_svg__fa-primary"
      d="M187.6 502.5 274.5 352H18.78c29.6 73.1 91.92 129.2 168.82 150.5zM76.69 73.42l86.93 150.6 127.7-221.3C279.8 1.119 268 0 256 0 186.1 0 122.9 28.05 76.69 73.42zM503.6 192H329.9l127.8 221.3C491.6 369.9 512 315.4 512 256c0-22.1-3.1-43.5-8.4-64z"
    />
    <path
      d="M0 256c0 22.14 3.105 43.51 8.391 64h173.7L54.291 98.7C20.4 142.1 0 196.6 0 256zM324.4 9.523 237.5 160h255.7C463.6 86.94 401.3 30.83 324.4 9.523zM220.6 509.3c11.6 1.6 22.5 2.7 35.4 2.7 69.86 0 133.1-28.05 179.3-73.42l-86.93-150.6L220.6 509.3z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgAperture;
