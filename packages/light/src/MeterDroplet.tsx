import * as React from "react";
import { SVGProps } from "react";

const SvgMeterDroplet = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M461.4 166.4c3.531 8.062 12.97 11.81 21.06 8.25 8.094-3.531 11.8-12.97 8.25-21.06C449.9 60.28 357.8 0 256 0 114.8 0 0 114.8 0 256s114.8 256 256 256c48.52 0 95.73-13.62 136.5-39.41 7.469-4.719 9.703-14.59 4.984-22.06-4.703-7.5-14.58-9.656-22.08-5C339.8 468.1 298.5 480 256 480 132.5 480 32 379.5 32 256S132.5 32 256 32c89.1 0 169.7 52.75 205.4 134.4zM336 144v64c0 8.8 7.2 16 16 16s16-7.156 16-16v-64c0-8.8-7.2-16-16-16s-16 7.2-16 16zm210.6 61.8c-2.5-9.1-10.6-13.8-19.5-13.8-7.875 0-15.77 4.516-18.59 13.83C479.7 304.3 416 331.2 416 400.7c0 61.5 50.1 111.3 112 111.3s112-49.84 112-111.3c0-69.9-63.5-95.8-93.4-194.9zM528 480c-44.11 0-80-35.59-80-79.33 0-25.12 11.2-42.05 32.66-72.25 14.99-21.1 32.8-46.16 47.33-80.15 14.6 34.2 32.45 59.25 47.48 80.33 21.33 30 32.53 46.8 32.53 72.1 0 43.7-35.9 79.3-80 79.3zM144 144v64c0 8.8 7.2 16 16 16s16-7.156 16-16v-64c0-8.8-7.2-16-16-16s-16 7.2-16 16zm96 0v64c0 8.8 7.2 16 16 16s16-7.156 16-16v-64c0-8.8-7.2-16-16-16s-16 7.2-16 16z" />
  </svg>
);

export default SvgMeterDroplet;