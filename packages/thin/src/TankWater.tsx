import * as React from "react";
import { SVGProps } from "react";

const SvgTankWater = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32h-60.38c-4.416 0-8 3.584-8 8s3.584 8 8 8H384c26.5 0 48 21.5 48 48v246.9c-17.18 5.119-36.32 1.791-50.98-9.951l-23.9-19.11a7.363 7.363 0 0 0-1.695-1.088 8.024 8.024 0 0 0-6.848 0c-.607.29-1.184.64-1.695 1.088l-23.9 19.11c-20.45 16.38-49.5 16.38-69.95 0l-23.9-19.11a7.363 7.363 0 0 0-1.695-1.088C226.3 312.3 225.2 312 224 312s-2.3.3-3.4.8c-1.5.3-1.2.6-1.7 1.1L195 333.01c-20.45 16.38-49.5 16.38-69.95 0L101.1 313.9c-.5-.5-1.1-.8-1.68-1.1a7.866 7.866 0 0 0-6.879.033 6.085 6.085 0 0 0-1.664 1.055l-23.9 19.11C52.32 344.7 33.18 348 16 342.9V96c0-26.5 21.5-48 48-48h64.38c4.416 0 8-3.584 8-8s-3.58-8-7.98-8H64C28.64 32 0 60.64 0 96v320c0 35.36 28.64 64 64 64h320c35.36 0 64-28.64 64-64V96c0-35.36-28.6-64-64-64zm48 384c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48v-56.54c20.86 4.736 43.39.065 60.99-13.98L96 330.2l19.01 15.23c26.3 21.02 63.68 21.02 89.98 0L224 330.2l19.01 15.23c26.3 21.02 63.68 21.02 89.98 0L352 330.2l19.01 15.23c17.6 14.05 40.13 18.72 60.99 13.98V416z" />
  </svg>
);

export default SvgTankWater;