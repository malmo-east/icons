import * as React from "react";
import { SVGProps } from "react";

const SvgMitten = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M351.1 416H63.99c-17.6 0-31.1 14.4-31.1 31.1l.003 31.1C31.1 497.6 46.4 512 63.1 512h288c17.6 0 32-14.4 32-31.1l-.005-31.1C383.1 430.4 369.6 416 351.1 416zM425 206.9c-27.25-22.62-67.5-19-90.13 8.25l-20.88 25L284.4 111.8c-18-77.5-95.38-125.1-172.8-108C34.26 21.63-14.25 98.88 3.754 176.4L64 384h288l81.14-86.1c22.66-28.1 18.96-68.4-8.14-91z" />
  </svg>
);

export default SvgMitten;
