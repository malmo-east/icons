import * as React from "react";
import { SVGProps } from "react";

const SvgArrowsRotate = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M454.7 288.1c-12.78-3.75-26.06 3.594-29.75 16.31C403.3 379.9 333.8 432 255.1 432c-66.53 0-126.8-38.28-156.5-96H199c13.25 0 24-10.75 24-24s-9.8-24-23.1-24h-160c-13.25 0-24 10.75-24 24v160c0 13.25 10.75 24 24 24s24-10.75 24-24V369.9C103.7 436.4 176.1 480 255.1 480c99 0 187.4-66.31 215.1-161.3 4.6-13.6-2.8-26-15.5-30.6zM472 16c-13.2 0-24 10.75-24 24v102.1C408.3 75.55 335.8 32 256 32 157 32 68.53 98.31 40.91 193.3c-3.72 12.7 3.59 26 16.31 29.7 12.84 3.781 26.09-3.625 29.75-16.31C108.7 132.1 178.2 80 256 80c66.53 0 126.8 38.28 156.5 96H312c-13.2 0-24 10.8-24 24s10.8 24 24 24h160c13.25 0 24-10.75 24-24V40c0-13.25-10.7-24-24-24z" />
  </svg>
);

export default SvgArrowsRotate;