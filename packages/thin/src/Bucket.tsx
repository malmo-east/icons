import * as React from "react";
import { SVGProps } from "react";

const SvgBucket = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M80 160c0 4.4-3.58 8-8 8s-8-3.6-8-8v-24C64 60.89 124.9 0 200 0h48c75.1 0 136 60.89 136 136v16c0 4.4-3.6 8-8 8s-8-3.6-8-8v-16c0-66.27-53.7-120-120-120h-48C133.7 16 80 69.73 80 136v24zM0 200c0-4.4 3.582-8 8-8h432c4.4 0 8 3.6 8 8s-3.6 8-8 8h-18l-32.7 261.1c-3 24-23.5 42.9-47.7 42.9H106.4c-24.23 0-44.65-18.9-47.66-42.9L26 208H8c-4.418 0-8-3.6-8-8zm74.62 267.1c2 16 15.62 28.9 31.78 28.9h235.2c16.2 0 29.8-12.9 31.8-28.9L405.9 208H42.12l32.5 259.1z" />
  </svg>
);

export default SvgBucket;
