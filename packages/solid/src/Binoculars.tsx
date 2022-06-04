import * as React from "react";
import { SVGProps } from "react";

const SvgBinoculars = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M416 48c0-8.87-7.1-16-16-16h-64c-8.9 0-16 7.13-16 16v48h96.04L416 48zM63.88 160.1C61.34 253.9 3.5 274.3 0 404v44c0 17.6 14.4 32 32 32h128c17.6 0 32-14.4 32-32V128H95.88c-17.62 0-31.53 14.5-32 32.1zm384.22 0c-.5-17.6-14.4-32.1-32-32.1H320v320c0 17.6 14.4 32 32 32h128c17.6 0 32-14.4 32-32v-44c-3.5-129.7-61.3-150.1-63.9-243.9zM224 288h64V128h-64v160zM176 32h-64c-8.9 0-16 7.13-16 16l-.04 48H192V48c0-8.87-7.1-16-16-16z" />
  </svg>
);

export default SvgBinoculars;
