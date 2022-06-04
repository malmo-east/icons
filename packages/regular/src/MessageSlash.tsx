import * as React from "react";
import { SVGProps } from "react";

const SvgMessageSlash = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="m630.8 469.1-82.44-64.61c16.64-11.58 27.63-30.8 27.63-52.52V63.1c0-35.25-28.75-63.1-63.1-63.1H127.1c-23.5 0-43.94 12.9-55.07 31.86L38.81 5.128C28.34-3.043 13.32-1.236 5.115 9.201c-8.172 10.44-6.349 25.53 4.073 33.7l591.1 463.1C605.6 510.3 610.8 512 615.1 512c7.125 0 14.17-3.159 18.9-9.19 9.1-10.41 7.2-25.51-3.2-33.71zM528 352c0 8.75-7.25 16-16 16h-10.19L112.3 62.69C112.1 54.57 119.7 48 128 48h384c8.75 0 16 7.25 16 16v288zm-256 76v-60H128c-8.75 0-16-7.25-16-16V184l-48-37.6V352c0 35.25 28.75 63.1 63.1 63.1h95.1v83.99c0 9.836 11.02 15.55 19.12 9.7l124.9-93.69 39.98.024-58.67-45.98L272 428z" />
  </svg>
);

export default SvgMessageSlash;
