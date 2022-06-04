import * as React from "react";
import { SVGProps } from "react";

const SvgHotdog = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M484 186.6c17.9-20.5 28-46.1 28-73.6C512 50.63 461.4.002 399 .002c-27.5 0-53.13 10.12-73.63 27.1l-2.87-1.972C306.5 10.03 285 .01 263.12.01 243.2-.123 224 7.627 209.1 21.75L21.75 209.9C-8.38 240.02-6.88 290.52 25 322.5l3 2.9c-17.88 20.5-28 46.1-28 72.7 0 62.37 50.62 112.1 113 112.1 27.5 0 53.12-10.12 73.62-27.1l2.875 2.875c16 15.1 37.5 25.12 59.38 25.12C268.8 512.1 288 504.4 301.1 490.2l188.3-188.1c30.12-30.12 28.62-80.62-3.375-112.6L484 186.6zM55.62 243.9l188.3-188.2c10.12-10.25 29.25-11.1 46.1 5.75L61.38 290.9c-17.76-17.8-15.88-36.9-5.76-47zm400.78 24.2L268.1 456.3c-10.13 10.25-29.25 11.1-47-5.75l229.5-229.5c17.8 17.85 15.9 36.95 5.8 47.05zM445 159 159 444.1c-25.38 25.37-66.62 25.37-92 0s-25.38-66.62 0-91.1L353 67.9c25.38-25.37 66.63-25.37 92 0s25.4 65.7 0 91.1zm-45-47c-10.5 10.5-19 11.5-30.75 12.1-5.625.625-63.5 3.25-71.62 71.62-5.125 41.75-35.25 42.75-43.75 43.75-5.68 1.53-63.48 4.13-71.48 72.43-1 8.375-1.875 38.5-43.5 43.5-13.9.7-31.1 3.7-49.52 22-5.875 6.375-5.75 16.12.375 22.25 6.125 6.125 16 6.25 22.25.375 10.5-10.5 19-11.5 30.75-12.87 5.625-.75 63.37-3.25 71.37-71.5C215.1 307.5 216 277.1 257.8 272.1c5.75-.75 63.5-3.375 71.62-71.62 5.125-41.75 35.38-42.75 43.63-43.75 14-1.75 31.25-3.75 49.63-22.12 6-6.25 5.875-16.25-.25-22.37C416.2 106.1 406.2 106 400 112z" />
  </svg>
);

export default SvgHotdog;
