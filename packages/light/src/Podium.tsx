import * as React from "react";
import { SVGProps } from "react";

const SvgPodium = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M432 160H96v-16c0-39.75 29.25-72.63 67.38-78.75C170.3 83.25 187.6 96 208 96h62.39c24.41 0 46.15-17.54 49.22-41.75C323.3 24.97 300.6 0 272 0h-64c-21.4 0-39.2 14-45.5 33.38C107.1 40.13 64 86.88 64 144v16H16c-8.801 0-16 7.2-16 16s7.199 16 16 16h416c8.8 0 16-7.2 16-16s-7.2-16-16-16zM208 32h64c8.9 0 16 7.13 16 16s-7.1 16-16 16h-64c-8.9 0-16-7.12-16-16s7.1-16 16-16zm177.8 192.1c-9.109-.906-16.72 5.344-17.7 14.09l-26.22 230.7C341.2 475.2 335.6 480 328.9 480H119.1c-6.688 0-12.28-4.781-13.02-11.12L79.89 238.2c-.98-8.8-8.67-15-17.7-14.1-8.78 1-15.08 8.9-14.08 17.7l26.22 230.7C76.89 495 96.14 512 119.1 512h209.8c22.98 0 42.23-16.97 44.8-39.5l26.22-230.7c.98-8.8-5.32-16.7-14.12-17.7z" />
  </svg>
);

export default SvgPodium;