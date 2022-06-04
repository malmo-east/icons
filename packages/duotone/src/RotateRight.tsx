import * as React from "react";
import { SVGProps } from "react";

const SvgRotateRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="rotate-right_svg__fa-primary"
      d="M468.9 32.11c13.87 0 27.18 10.77 27.18 27.04v145.9c0 10.59-8.584 19.17-19.17 19.17h-145.7c-16.28 0-27.06-13.32-27.06-27.2 0-6.634 2.461-13.4 7.96-18.9l137.1-138c6.29-5.55 13.09-8.01 19.69-8.01z"
    />
    <path
      d="M371 377.6c18.48 0 31.97 15.04 31.97 31.96 0 35.04-81.59 70.41-147 70.41-123.4 0-223.9-100.5-223.9-223.9s100.5-223.1 223.9-223.1c54.6 0 106.3 20.75 146.5 55.63l-45.24 45.27c-28.22-23.14-63.85-36.64-101.3-36.64-88.09 0-159.8 71.69-159.8 159.8S167.8 415.9 255.9 415.9c73.1 0 89.4-38.3 115.1-38.3z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgRotateRight;
