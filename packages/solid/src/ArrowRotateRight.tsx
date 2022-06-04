import * as React from "react";
import { SVGProps } from "react";

const SvgArrowRotateRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M496 48v144c0 17.69-14.31 32-32 32H320c-17.69 0-32-14.31-32-32s14.31-32 32-32h63.39c-29.97-39.7-77.25-63.78-127.6-63.78C167.7 96.22 96 167.9 96 256s71.69 159.8 159.8 159.8c34.88 0 68.03-11.03 95.88-31.94 14.22-10.53 34.22-7.75 44.81 6.375 10.59 14.16 7.75 34.22-6.375 44.81-39.03 29.28-85.36 44.86-134.2 44.86C132.5 479.9 32 379.4 32 256S132.5 32.1 255.9 32.1c69.15 0 134 32.47 176.1 86.12V48c0-17.69 14.31-32 32-32s32 14.31 32 32z" />
  </svg>
);

export default SvgArrowRotateRight;
