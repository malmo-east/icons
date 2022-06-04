import * as React from "react";
import { SVGProps } from "react";

const SvgMask = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M288 64C39.52 64 0 182.1 0 273.5 0 379.5 78.8 448 176 448c27.33 0 51.21-6.516 66.11-36.79l19.93-40.5C268.3 358.6 278.1 352.4 288 352.1c9.9.371 19.7 6.501 25.97 18.63l19.93 40.5C348.8 441.5 372.7 448 400 448c97.2 0 176-68.51 176-174.5C576 182.1 536.5 64 288 64zm112 336c-18.12 0-19.56-2.924-23.04-9.986l-20.35-41.33c-13.87-26.86-38.85-43.53-66.82-44.57L288 304l-1.8.1c-27.96 1.049-52.94 17.71-67.24 45.41L199.03 390c-3.43 7.1-4.93 10-23.03 10-75.36 0-128-52.04-128-126.5C48 229.3 48 112 288 112s240 117.3 240 161.5c0 73.6-52.6 126.5-128 126.5zM160 192c-35.3 0-64 28.7-64 64s28.65 64 64 64 64-28.65 64-64-28.7-64-64-64zm256 0c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.7-64-64-64z" />
  </svg>
);

export default SvgMask;