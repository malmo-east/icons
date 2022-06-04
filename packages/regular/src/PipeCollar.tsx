import * as React from "react";
import { SVGProps } from "react";

const SvgPipeCollar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M467.8 399.9c27.9-40.99 44.22-90.53 44.22-143.9S495.7 153.1 467.8 112.1l29.3-30.16c18.72-18.75 18.72-49.15 0-67.9-18.75-18.72-49.15-18.72-67.9 0l-30.18 30.18C358.03 16.32 308.49 0 255.12 0s-102.9 16.32-143.9 44.22L81.96 14.04c-18.75-18.72-49.15-18.72-67.9 0-18.72 18.75-18.72 49.15 0 67.9l30.18 30.18C16.34 153.11.02 202.65.02 256.02s16.32 102.9 44.22 143.9L14.06 430c-18.72 18.75-18.72 49.15 0 67.9 18.75 18.72 49.15 18.72 67.9 0l30.18-30.18c40.99 27.9 90.53 44.22 143.9 44.22s102.9-16.32 143.9-44.22l30.16 30.18c18.75 18.72 49.15 18.72 67.9 0 18.72-18.75 18.72-49.15 0-67.9l-30.2-30.1zM256 463.1c-114.9 0-208-93.12-208-208 0-114.9 93.12-208 208-208s208 93.12 208 208c0 115.8-93.1 208-208 208zm0-367.11c-88.35 0-160 71.65-160 160s71.65 160 160 160 160-71.65 160-160-71.6-160-160-160zm0 271.11c-61.86 0-112-50.14-112-112s50.14-112 112-112 112 50.14 112 112c0 62.7-50.1 112-112 112z" />
  </svg>
);

export default SvgPipeCollar;