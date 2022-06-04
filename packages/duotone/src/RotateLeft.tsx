import * as React from "react";
import { SVGProps } from "react";

const SvgRotateLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="rotate-left_svg__fa-primary"
      d="m62.07 39.96 137.1 138c17.01 17.02 4.955 46.1-19.1 46.1H35.17C24.58 224.1 16 215.5 16 204.9V59.04c0-24.05 29.07-36.09 46.07-19.08z"
    />
    <path
      d="M480 256c0 123.4-100.5 223.9-223.9 223.9-48.84 0-95.17-15.58-134.2-44.86-14.12-10.59-16.97-30.66-6.375-44.81 10.59-14.12 30.62-16.94 44.81-6.375 27.84 20.91 61 31.94 95.88 31.94C344.3 415.8 416 344.1 416 256S344.31 96.2 256.2 96.2c-37.46 0-73.09 13.49-101.3 36.64l-45.2-45.25c40.2-34.88 91.8-55.48 146.4-55.48C379.5 32.11 480 132.6 480 256z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgRotateLeft;
