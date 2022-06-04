import * as React from "react";
import { SVGProps } from "react";

const SvgBinoculars = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M432.1 128.1c-.5-17.6-14.4-32.1-32-32.1l-.1-32c0-17.67-14.33-32-32-32h-48c-17.67 0-32 14.33-32 32v32h-64V64c0-17.67-14.33-32-32-32h-48c-17.67 0-32 14.33-32 32v32c-17.62 0-31.65 14.5-32.12 32.1C77.34 221.9 19.5 242.3 16 372v76c0 17.6 14.4 32 32 32h144c17.6 0 32-14.4 32-32V288h64v160c0 17.6 14.4 32 32 32h144c17.6 0 32-14.4 32-32v-76c-3.5-129.7-61.3-150.1-63.9-243.9zM208 448c0 8.822-7.176 16-16 16H48c-8.82 0-16-7.2-16-16l-.004-75.57C33.8 305.6 50.41 269.9 66.49 235.4c14.46-31.1 28.12-60.5 29.38-106.9.25-9.2 7.33-16.5 16.13-16.5h96v336zm0-352h-80V64c0-8.838 7.164-16 16-16h48c8.836 0 16 7.162 16 16v32zm80 176h-64V112h64v160zm16-208c0-8.838 7.164-16 16-16h48c8.8 0 16 7.16 16 16v32h-80V64zm176 384c0 8.822-7.176 16-16 16H320c-8.824 0-16-7.178-16-16V112h96.13c8.723 0 15.76 7.421 16.01 16.69 1.254 46.41 14.91 75.61 29.38 106.7C461.6 269.9 478.2 305.6 480 372v76z" />
  </svg>
);

export default SvgBinoculars;
