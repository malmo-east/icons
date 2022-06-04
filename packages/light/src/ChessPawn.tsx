import * as React from "react";
import { SVGProps } from "react";

const SvgChessPawn = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M272 448H47.1C21.53 448 0 469.5 0 495.1c0 9.7 7.156 16.9 16 16.9s16-7.2 16-16 7.19-16 16-16h224c8.812 0 16 7.188 16 16 0 8.844 7.156 16 16 16s16-7.156 16-16c0-26.5-21.5-48-48-48zM80 208c-8.84 0-16 7.2-16 16s7.156 16 16 16h19.97L64.41 396.5C62.22 406 69.3 416 80 416c7.312 0 13.91-5.031 15.59-12.47L132.8 240h54.48l37.17 163.5c1.65 6.6 8.25 12.5 15.55 12.5 10.91 0 17.74-10.18 15.59-19.53L220 240h20c8.8 0 16-7.2 16-16s-7.156-16-16-16h-5.254C252.8 189.3 264 163.1 264 136c0-57.34-46.7-104-104.9-104S56 78.66 56 136c0 27.97 11.23 53.29 29.25 72H80zm80-144c39.69 0 72 32.31 72 72s-32.3 72-72 72-72-32.3-72-72 32.3-72 72-72z" />
  </svg>
);

export default SvgChessPawn;
