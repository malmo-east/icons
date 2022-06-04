import * as React from "react";
import { SVGProps } from "react";

const SvgArrowsToDottedLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M200 256c0 13.25 10.74 24 24 24s24-10.7 24-24c0-13.26-10.74-24-24-24s-24 10.7-24 24zm-48 0c0-13.26-10.74-24-24-24s-24 10.7-24 24c0 13.25 10.74 24 24 24s24-10.7 24-24zM32 232c-13.26 0-24 10.7-24 24 0 13.25 10.74 24 24 24s24-10.7 24-24-10.74-24-24-24zm384 0c-13.26 0-24 10.74-24 24 0 13.25 10.74 24 24 24s24-10.7 24-24-10.7-24-24-24zm-96 0c-13.26 0-24 10.74-24 24 0 13.25 10.74 24 24 24s24-10.7 24-24-10.7-24-24-24zm-107.3-44.7c1.7 1.7 5.6 4.7 11.3 4.7s9.609-2.98 11.33-4.707l79.98-79.98A16.068 16.068 0 0 0 320 96c0-8.527-6.865-16-16-16a15.933 15.933 0 0 0-11.31 4.688L240 137.4V16c0-8.844-7.2-16-16-16s-16 7.156-16 16v121.4l-52.7-52.71C152.2 81.56 148.1 80 144 80c-9.1 0-16 7.47-16 16 0 4.094 1.562 8.188 4.688 11.31L212.7 187.3zm22.6 137.4c-4-4-8.8-4.7-11.3-4.7s-7.298.653-11.33 4.697l-79.98 79.98C129.6 407.8 128 411.9 128 416c0 8.527 6.865 16 16 16 4.094 0 8.188-1.562 11.31-4.688L208 374.6V496c0 8.844 7.156 16 16 16s16-7.156 16-16V374.6l52.69 52.69C295.8 430.4 299.9 432 304 432c9.139 0 16-7.473 16-16 0-4.094-1.562-8.188-4.688-11.31L235.3 324.7z" />
  </svg>
);

export default SvgArrowsToDottedLine;
