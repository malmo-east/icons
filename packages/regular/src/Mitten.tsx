import * as React from "react";
import { SVGProps } from "react";

const SvgMitten = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M416.7 184.8c-15.5-13-35.25-20.12-55.5-20.12-14.87 0-29.12 3.625-41.75 10.62l-12.55-54.8C290.5 49.63 228.2 0 155.5 0c-11.75 0-23.5 1.375-35.12 4C36.99 23.25-15.26 106.9 3.992 190.4L54.61 384h49.62l-53.5-204.4C37.49 121.9 73.61 64.13 131.2 50.75c8-1.75 16.2-2.75 24.3-2.75 50.25 0 93.24 34.25 104.6 83.25l32.62 141.5 38.5-46.13c7.5-8.875 18.37-14 29.1-14 9 0 17.88 3.125 24.75 9 16.5 13.62 18.75 38.25 5 54.63L301.2 384h62.5l64.12-76.88C458.6 270.3 453.6 215.4 416.7 184.8zM351.1 416H63.99c-17.6 0-31.1 14.4-31.1 31.1l.003 31.1C31.1 497.6 46.4 512 63.1 512h288c17.6 0 32-14.4 32-31.1l-.005-31.1C383.1 430.4 369.6 416 351.1 416z" />
  </svg>
);

export default SvgMitten;
