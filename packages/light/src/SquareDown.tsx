import * as React from "react";
import { SVGProps } from "react";

const SvgSquareDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M64 480h320c35.35 0 64-28.65 64-64V96c0-35.35-28.65-64-64-64H64C28.65 32 0 60.65 0 96v320c0 35.3 28.65 64 64 64zM32 96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v320c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96zm163.7 292.3c15.12 15.12 41.25 15.33 56.75-.203l92.5-95.8a39.942 39.942 0 0 0 8.688-43.59C347.4 233.7 332.9 224 316.7 224H288v-72c0-22.06-17.94-40-40-40h-48c-22.1 0-40 17.9-40 40v72h-28.7c-16.2 0-30.7 9.7-36.96 24.7-6.188 14.95-2.812 32 8.562 43.48L195.7 388.3zM131.3 256H192V152c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v104h60.69c6.414 0 11.26 8.048 5.471 13.86l-92.5 95.8c-4.162 4.205-9.532 1.796-11.12.203l-92.69-96C120.1 265 123.9 256 131.3 256z" />
  </svg>
);

export default SvgSquareDown;
