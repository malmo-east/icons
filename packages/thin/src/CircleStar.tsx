import * as React from "react";
import { SVGProps } from "react";

const SvgCircleStar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M387.6 198.1c6.1.9 11.1 5.1 13 10.9 1.8 5.8.3 12.2-4.1 16.4l-58.6 57.2 13.8 80.7c1 6-1.4 12.1-6.4 14.8-4.9 4.5-11.4 4.9-16.8 2.1L256 342.1l-72.5 38.1c-5.4 2.8-11.9 2.4-16.8-2.1-5-2.7-7.4-8.8-6.4-14.8l13.8-80.7-58.6-57.2c-4.4-4.2-5.9-10.6-4.1-16.4 1.9-5.8 6.9-10 13-10.9l81-11.7 36.3-73.5c2.6-5.4 8.2-9.8 14.3-9.8 6.1 0 11.7 4.4 14.3 9.8l36.3 73.5 81 11.7zm-260.9 15 58.6 58c3.8 3.7 5.5 9 4.6 14.2L176.1 366l72.5-38.1c4.6-2.4 10.2-2.4 14.8 0l72.5 38.1-13.8-80.7c-.9-5.2.8-10.5 4.6-14.2l58.6-58-81-10.9c-5.2-.8-9.7-4-12.1-8.8L256 120l-36.2 73.4c-2.4 4.8-6.9 8-12.1 8.8l-81 10.9zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 16C123.5 16 16 123.5 16 256s107.5 240 240 240 240-107.5 240-240S388.5 16 256 16z" />
  </svg>
);

export default SvgCircleStar;
