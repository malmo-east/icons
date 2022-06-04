import * as React from "react";
import { SVGProps } from "react";

const SvgFunction = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="m200 0-40 .01c-48.6 0-88 39.65-88 88.58v96.64H24c-13.25 0-24 10.82-24 24.16 0 13.31 10.75 24.21 24 24.21h48v161.1c0 22.24-17.91 40.27-40 40.27h-8c-13.25 0-24 10.82-24 24.16s10.75 24.16 24 24.16h8c48.6 0 88-39.66 88-88.59V233.6h48c13.25 0 24-10.82 24-24.16s-10.75-24.16-24-24.16h-48V88.59c0-22.24 17.91-40.27 40-40.27h40c13.25 0 24-10.82 24-24.16S213.3 0 200 0zm111.5 137.4c-11.4-8.7-27.2-6-35 6.2-34 52.9-52.5 114.5-52.5 178.5 0 63.15 18.48 125.6 52.51 178.6 7.781 12.11 23.56 14.88 34.99 6.189 9.865-7.498 12.28-21.35 5.568-31.8C287.9 429.7 272 376.2 272 322.1c0-54.02 15.91-107.6 45.08-152.1 6.72-11.3 4.32-25.1-5.58-32.6zm276 6.2c-7.781-12.11-23.56-14.88-34.99-6.189-9.865 7.498-12.28 21.35-5.568 31.8C576.1 214.6 592 268.1 592 322.1c0 54.02-15.91 107.6-45.08 152.1-6.713 10.45-4.297 24.3 5.568 31.8 11.44 8.691 27.21 5.922 34.99-6.189C621.5 447.8 640 385.3 640 322.1c0-64-18.5-125.6-52.5-178.5zm-86.4 108.1c-9.074-9.137-23.93-9.137-32.1 0l-37 37.2-37-37.25c-9.074-9.137-23.93-9.137-33 0-9.074 9.135-9.074 24.09 0 33.22l37 37.25-37 37.25c-9.074 9.135-9.074 24.09 0 33.22 9.074 9.137 23.93 9.137 33 0l37-37.19 37 37.25c9.074 9.137 23.93 9.137 32.1 0 9.074-9.135 9.074-24.09 0-33.22L465 322.1l36.1-37.25c10-9.05 10-24.05 0-33.15z" />
  </svg>
);

export default SvgFunction;
