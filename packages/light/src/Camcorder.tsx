import * as React from "react";
import { SVGProps } from "react";

const SvgCamcorder = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M304 223.1H80c-8.844 0-16 7.156-16 16 0 8.842 7.156 15.1 16 15.1h224c8.844 0 16-7.158 16-15.1 0-7.9-7.2-16-16-16zm254.8-59.4c-10.59-5.484-23.35-4.74-33.13 2.12l-102.8 72.02c-7.25 5.062-9 15.05-3.938 22.28 5.062 7.25 15.02 8.984 22.28 3.938l102.8-71.97v255.9l-102.8-71.97c-7.266-5.047-17.22-3.312-22.28 3.938-5.062 7.234-3.312 17.22 3.938 22.28l102.8 72C531.1 478.1 537.5 480 543.1 480c5.047 0 10.12-1.203 14.78-3.625 10.64-5.531 17.23-16.41 17.23-28.39V192c.89-11.9-5.71-22.8-16.31-28.3zM320 159.1H96v-48c0-25.57 21.5-48 48-48h160c8.844 0 16-7.156 16-16 0-7.94-7.2-15.1-16-15.1H144c-44.12 0-80 35.89-80 79.1v48c-35.35 0-64 28.66-64 64v191.1c0 35.34 28.65 63.1 64 63.1l256-.002c35.35 0 64-28.66 64-63.1V223.1c0-34.4-28.7-64-64-64zm32 256c0 17.64-14.36 31.1-32 31.1H64c-17.64 0-32-14.35-32-31.1v-192c0-17.64 14.36-31.1 32-31.1h256c17.64 0 32 14.36 32 31.1v192z" />
  </svg>
);

export default SvgCamcorder;
