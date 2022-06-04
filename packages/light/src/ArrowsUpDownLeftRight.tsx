import * as React from "react";
import { SVGProps } from "react";

const SvgArrowsUpDownLeftRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 255.1c0 4.094-1.562 8.222-4.688 11.35l-80 80C424.2 350.4 420.1 352 416 352c-9.139 0-16-7.473-16-16 0-4.094 1.562-8.188 4.688-11.31L457.4 272H272v185.4l52.69-52.69C327.8 401.6 331.9 400 336 400c9.139 0 16 7.473 16 16 0 4.094-1.562 8.188-4.688 11.31l-80 80C264.2 510.4 260.1 512 256 512s-8.188-1.562-11.31-4.688l-80-80A16.064 16.064 0 0 1 160 416c0-8.527 6.865-16 16-16 4.094 0 8.188 1.562 11.31 4.688L240 457.4V272H54.63l52.69 52.69C110.4 327.8 112 331.9 112 336c0 8.5-6.9 16-16 16a15.933 15.933 0 0 1-11.31-4.688l-80-80C1.563 264.2 0 260.1 0 255.1s1.562-8.153 4.688-11.28l80-80C87.81 161.6 91.91 160 96 160c9.139 0 16 7.473 16 16 0 4.094-1.562 8.188-4.688 11.31L54.63 240H240V54.63l-52.7 52.67c-3.1 3.1-7.2 4.7-11.3 4.7-9.1 0-16-7.5-16-16 0-4.094 1.562-8.188 4.688-11.31l80-80C247.8 1.562 251.9 0 256 0s8.188 1.562 11.31 4.688l80 80C350.4 87.81 352 91.91 352 96c0 8.527-6.865 16-16 16a15.933 15.933 0 0 1-11.31-4.688L272 54.63V240h185.4l-52.69-52.69A15.993 15.993 0 0 1 400 176c0-8.5 6.9-16 16-16 4.094 0 8.188 1.562 11.31 4.688l80 80C510.4 247.8 512 251.9 512 255.1z" />
  </svg>
);

export default SvgArrowsUpDownLeftRight;