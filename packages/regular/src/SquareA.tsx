import * as React from "react";
import { SVGProps } from "react";

const SvgSquareA = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm16 384c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h320c8.822 0 16 7.178 16 16v320zM245.8 140.8c-7.844-17.08-35.75-17.08-43.59 0l-96.01 209c-5.547 12.09-.297 26.44 11.73 31.99 12.09 5.588 26.28.315 31.86-11.77l12.03-26.18h124.3l12.03 26.18a23.987 23.987 0 0 0 21.81 14c3.359 0 6.781-.723 10.05-2.229 12.03-5.557 17.28-19.9 11.73-31.99L245.8 140.8zm-62.7 154.8 40.9-87.1 40.02 87.14H183.1z" />
  </svg>
);

export default SvgSquareA;
