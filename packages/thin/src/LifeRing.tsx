import * as React from "react";
import { SVGProps } from "react";

const SvgLifeRing = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M453.7 442.3c3.1 3.2 3.1 8.2 0 11.4a8.15 8.15 0 0 1-11.4 0l-11-11.1c-45.8 43-107.5 69.4-176.2 69.4-66.9 0-128.6-26.4-174.37-69.4l-11.07 11.1c-3.13 3.1-8.19 3.1-11.32 0a8.112 8.112 0 0 1 0-11.4l11.07-11C26.37 385.5 0 323.8 0 255.1c0-66.9 26.37-128.6 69.41-174.37L58.34 69.66a8.015 8.015 0 0 1 0-11.32 8.015 8.015 0 0 1 11.32 0l11.07 11.07C126.5 26.37 188.2 0 255.1 0c68.7 0 130.4 26.37 176.2 69.41l11-11.07c3.2-3.12 8.2-3.12 11.4 0 3.1 3.13 3.1 8.19 0 11.32l-11.1 11.07C485.6 126.5 512 188.2 512 255.1c0 68.7-26.4 130.4-69.4 176.2l11.1 11zm-136.6-113c-15.8 14.2-37.5 22.7-62 22.7-22.7 0-44.4-8.5-61.1-22.7l-101.96 102C134.9 471.4 192.6 496 255.1 496c64.3 0 121.9-24.6 164-64.7l-102-102zM496 256c0-63.4-24.6-121.1-64.7-163.96L329.3 194c14.2 16.7 22.7 38.4 22.7 62s-8.5 45.3-22.7 61.1l102 102c40.1-42 64.7-99.7 64.7-163.1zM255.1 16c-62.5 0-120.2 24.58-163.06 64.73L194 182.7c16.7-14.2 38.4-23.6 61.1-23.6 24.5 0 46.2 9.4 62 23.6l102-101.97C377.1 40.58 319.4 16 255.1 16zm-72.4 301.1c-14.2-15.8-23.6-37.5-23.6-61.1s9.4-45.3 23.6-62L80.73 92.04C40.58 134.9 15.1 192.6 15.1 256c0 63.4 25.48 121.1 65.63 163.1l101.97-102zM255.1 176c-43.3 0-80 35.8-80 80s36.7 80 80 80c45.1 0 80.9-35.8 80.9-80s-35.8-80-80.9-80z" />
  </svg>
);

export default SvgLifeRing;
