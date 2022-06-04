import * as React from "react";
import { SVGProps } from "react";

const SvgMushroom = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M144.4 160c-27.3 0-47.87 21.5-47.87 48s20.57 48 47.87 48 47.84-21.53 47.84-48-21.44-48-47.84-48zm0 64c-8.8 0-16-7.2-16-16s7.2-16 16-16 15.95 7.172 15.95 16-7.15 16-15.95 16zm344.1 18.1-6.206-28.02C458.7 107.7 364.6 32 256 32S53.32 107.7 29.75 214.1l-6.2 28c-8.86 40 21.46 77.9 62.26 77.9h90.28l-15.4 105c-2.025 13.81 2.056 27.78 11.15 38.36C180.9 473.9 194.1 480 208 480h95.93c13.92 0 27.1-6.062 36.19-16.62 9.095-10.58 13.18-24.55 11.15-38.36L335.9 320h90.28c39.92 0 71.12-37.9 62.32-77.9zM431.4 192c0 17.64-14.3 32-31.89 32s-31.89-14.36-31.89-32 14.3-32 31.89-32 31.89 14.4 31.89 32zM256 64c4.561 0 8.902.846 13.39 1.143C261.8 92.49 236.9 112 208.2 112c-19.14 0-36.63-8.566-48.8-23.23C188.1 72.94 221.1 64 256 64zm60 378.5c-3.9 3.5-7.3 5.5-12.9 5.5H208c-4.703 0-9.001-1.969-12.05-5.547-3.083-3.578-4.392-8.109-3.706-12.78L208.3 320h95.34l16.06 109.7c.7 4.6-.6 9.2-3.7 12.8zM451.1 276c-7 7.6-15.2 12-24.9 12H85.81c-9.72 0-18.79-4.4-24.88-12-6.08-7.6-8.36-17.4-6.25-26.9l6.206-28.02c10.41-47.01 36.37-86.66 71.68-114.4C150.8 130.3 178.2 144 208.2 144c44.46 0 83.05-31.14 93.03-74.29 39.53 9.086 74.77 29.45 101.6 58.62-1.13-.03-2.23-.33-3.33-.33-35.16 0-63.79 28.7-63.79 64s28.62 64 63.79 64c22.08 0 41.57-11.34 53.02-28.5l4.775 21.56c2.105 9.54-.095 19.34-6.195 26.94z" />
  </svg>
);

export default SvgMushroom;