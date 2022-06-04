import * as React from "react";
import { SVGProps } from "react";

const SvgCandyCane = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M497.1 95.38C469.2 36.62 411.4 0 346.4 0c-29.88 0-59.25 8.125-85 23.5l-25.7 15.38c-21.88 13-29 41.37-16 63.13l30.9 51.49c12.13 20.25 39.88 29.75 63.13 15.88l25.75-15.37c16-9.625 30.13 14.62 14.38 24L22.43 375c-10.63 6.25-18 16.38-21 28.25-3 12-1.25 24.38 5.125 34.88l30.75 51.5C45.68 503.4 60.68 512 76.8 512c8.375 0 16.38-2.25 23.63-6.5L426.2 311.9c75.6-45.3 106.9-140.4 70.9-216.52zM212.3 383.2l-56.4-31.7 64.25-38.25 56.38 31.88-64.23 38.07zm111.9-66.4L267.7 285l59.5-35.25 56.25 31.62-59.25 35.43zm70.9-188.7c-3.25-4.125-6.875-7.875-10.88-10.88v-63c30 10 55.25 31.63 69.5 61.75 1.875 3.875 2.875 8 4.25 12.12H395.1zm-59-79.35v56.62c-15.88 2.875-19.38 6.25-45.13 22l-28.88-48.25c27.61-16.5 42.61-27.62 74.01-30.37zM108.3 379.8l56.5 31.87-87.12 51.83-29-48.25 59.62-35.45zm318.3-129.2-51.88-29.25C392.7 210.8 403.9 198.2 407.7 176h55.38c-3.18 27.5-15.88 53.9-36.48 74.6z" />
  </svg>
);

export default SvgCandyCane;
