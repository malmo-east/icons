import * as React from "react";
import { SVGProps } from "react";

const SvgMonkey = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M96 32c-35.35 0-64 28.65-64 64v272c0 61.9 50.14 112 112 112h16v-64c0-93.2 56.9-173.9 137.8-206.8 3.3 10 9.6 19.4 16.1 28C242.5 265.2 192 334.7 192 416v64h224v-48c0-44.2-35.8-80-80-80h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32c31.3 0 59.7 12.9 80 33.6V288c11.7 0 22.1-1.6 33.7-4.5l87.2 92.6c25.1 26.7 39.1 62 39.1 98.7V496c0 8.8-7.2 16-16 16s-16-7.2-16-16v-21.2c0-28.6-10.9-56-30.4-76.8L448 328.3V480h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H144C64.47 512 0 447.5 0 368V96C0 42.98 42.98 0 96 0h32c53 0 96 42.98 96 96 0 53-43 96-96 96h-16c-8.8 0-16-7.2-16-16s7.2-16 16-16h16c35.3 0 64-28.7 64-64 0-35.35-28.7-64-64-64H96zm304 80c0 8.8-7.2 16-16 16s-16-7.2-16-16 7.2-16 16-16 16 7.2 16 16zm32 0c0-8.8 7.2-16 16-16s16 7.2 16 16-7.2 16-16 16-16-7.2-16-16zm-110.7 64H320c-35.3 0-64-28.7-64-64 0-35.35 28.7-64 64-64h12.8C349.4 19.31 380.5 0 416 0s66.6 19.31 83.2 48H512c35.3 0 64 28.65 64 64 0 35.3-28.7 64-64 64h-1.3c-7.6 45.4-47.1 80-94.7 80s-87.1-34.6-94.7-80zM416 32c-35.3 0-64 28.65-64 64v64c0 35.3 28.7 64 64 64s64-28.7 64-64V96c0-35.35-28.7-64-64-64zm-96 64c0-5.45.5-10.8 1.3-16H320c-17.7 0-32 14.33-32 32 0 17.7 14.3 32 32 32V96zm192-16h-1.3c.8 5.2 1.3 10.55 1.3 16v48c17.7 0 32-14.3 32-32 0-17.67-14.3-32-32-32z" />
  </svg>
);

export default SvgMonkey;
