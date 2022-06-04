import * as React from "react";
import { SVGProps } from "react";

const SvgHatChef = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M416 32c-20.88.125-41.13 7-57.75 19.75C334.9 20.5 297.1 0 256 0c-42.9 0-78.9 20.5-102.2 51.75-29-22.25-68-25.1-100.6-9.75C20.38 58.13-.125 91.5 0 128c0 32.86 39.66 152.8 56.54 202.3 4.42 13 16.57 21.7 30.28 21.7h338.4c13.71 0 25.86-8.68 30.28-21.66C472.3 280.8 512 160.9 512 128c0-53-43-96-96-96zm10.1 288h-54.55l28.18-140.9c1.734-8.656-3.891-17.09-12.55-18.81-8.719-1.844-17.09 3.875-18.83 12.56L338.9 320H272V151.2c0-8.844-7.156-16-16-16s-16 7.156-16 16V320h-66.9l-29.4-147.1c-2.6-8.7-10.1-14.4-18.8-12.6-8.7 1.7-14.3 10.2-12.6 18.8L140.5 320H85.94C67.92 262.3 32 145 32 128c0-35.38 28.62-64 64-64 13.88.125 27.38 4.75 38.38 13.25l25.75 19.5 19.25-25.88C197.9 46.13 225.8 32 256 32s58.13 14.12 76.63 38.88l19.25 25.88 25.75-19.5C388.6 68.75 402.1 64.13 416 64c35.38 0 64 28.62 64 64 0 17-35.9 134.3-53.9 192zm5.9 64c-8.844 0-16 7.156-16 16v64c0 8.812-7.172 16-16 16H112c-8.8 0-16-7.2-16-16v-64c0-8.8-7.16-16-16-16s-16 7.2-16 16v64c0 26.5 21.53 48 48 48h288c26.47 0 48-21.53 48-48v-64c0-8.8-7.2-16-16-16z" />
  </svg>
);

export default SvgHatChef;