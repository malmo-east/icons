import * as React from "react";
import { SVGProps } from "react";

const SvgVideo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M558.8 99.64c-10.59-5.484-23.37-4.76-33.15 2.099l-102.8 72.04c-7.25 5.062-9 15.05-3.938 22.28C423.1 203.3 433.9 205 441.2 200L544 128v255.9L441.2 312c-7.266-5.047-17.22-3.312-22.28 3.938-5.062 7.234-3.312 17.22 3.938 22.28l102.8 71.98a32.08 32.08 0 0 0 18.38 5.786c5.047 0 10.12-1.203 14.78-3.625C569.4 406.8 576 395.1 576 383.1V128c0-12-6.6-22.8-17.2-28.36zM320 64H64C28.65 64 0 92.65 0 128v256c0 35.35 28.65 64 64 64h256c35.35 0 64-28.65 64-64V128c0-35.35-28.7-64-64-64zm32 320c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V128c0-17.64 14.36-32 32-32h256c17.64 0 32 14.36 32 32v256z" />
  </svg>
);

export default SvgVideo;
