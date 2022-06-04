import * as React from "react";
import { SVGProps } from "react";

const SvgSquareStar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="square-star_svg__fa-primary"
      d="m306.6 186.4 81 11.7c6.1.9 11.1 5.1 13 10.9 1.8 5.8.3 12.2-4.1 16.4l-58.6 57.2 13.8 80.7c1 6-1.4 12.1-6.4 14.8-4.9 4.5-11.4 4.9-16.8 2.1L256 342.1l-72.5 38.1c-5.4 2.8-11.9 2.4-16.8-2.1-5-2.7-7.4-8.8-6.4-14.8l13.8-80.7-58.6-57.2c-4.4-4.2-5.9-10.6-4.1-16.4 1.9-5.8 6.9-10 13-10.9l81-11.7 36.3-73.5c2.6-5.4 8.2-8.9 14.3-8.9 6.1 0 11.7 3.5 14.3 8.9l36.3 73.5z"
    />
    <path
      d="M32 96c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H96c-35.35 0-64-28.7-64-64V96zm209.7 16.9-36.3 73.5-81 11.7c-6.1.9-11.1 5.1-13 10.9-1.8 5.8-.3 12.2 4.1 16.4l58.6 57.2-13.8 80.7c-1 6 1.4 12.1 6.4 14.8 4.9 4.5 11.4 4.9 16.8 2.1l71.6-38.1 73.4 38.1c5.4 2.8 11.9 2.4 16.8-2.1 5-2.7 7.4-8.8 6.4-14.8l-13.8-80.7 58.6-57.2c4.4-4.2 5.9-10.6 4.1-16.4-1.9-5.8-6.9-10-13-10.9l-81-11.7-36.3-73.5c-2.6-5.4-8.2-8.9-15.2-8.9-5.2 0-10.8 3.5-13.4 8.9z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSquareStar;