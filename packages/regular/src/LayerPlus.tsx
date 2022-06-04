import * as React from "react";
import { SVGProps } from "react";

const SvgLayerPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M452 60h36c11 0 20 8.95 20 20s-9 20-20 20h-36v36c0 11-9 20-20 20-11.9 0-20-9-20-20v-36h-36c-11.9 0-20-8.95-20-20s8.1-20 20-20h36V24c0-11.05 8.1-20 20-20 11 0 20 8.95 20 20v36zm-171.2 73.1 209.3 89.7c13.3 5.7 21.9 18.7 21.9 33.2 0 14.5-8.6 27.5-21.9 33.2l-209.3 89.7c-8.7 3.4-16.3 5.1-24.8 5.1s-17-1.7-24.8-5.1L21.9 289.2C8.614 283.5 0 270.5 0 256c0-14.5 8.614-27.5 21.9-33.2l209.3-89.7c7.8-3.4 16.3-5.1 24.8-5.1s16.1 1.7 24.8 5.1zM66.26 256l183.84 78.8c1 .8 3 1.2 5.9 1.2 2 0 4-.4 5.9-1.2L445.7 256l-183.8-78.8c-1.9-.8-3.9-1.2-5.9-1.2-2.9 0-4.9.4-5.9 1.2L66.26 256zm-6.73 94.6c6.62 9.3 5.71 21.7-2.43 29.9l193 82.3c1 .8 3 1.2 5.9 1.2 2 0 4-.4 5.9-1.2L452 381.3c-4.6-6.9-5.5-16.1-1.5-24 6-11.9 20.4-16.7 32.2-10.8l9.1 4.6c12.4 6.2 20.2 18.8 20.2 32.6 0 14.7-8.7 27.9-22.1 33.6l-209.1 89.6c-8.7 3.4-16.3 5.1-24.8 5.1s-17-1.7-24.8-5.1L22.81 417.6C8.971 411.7.001 398.1.001 383c0-12.1 5.869-23.5 15.759-30.6l10.29-7.4c10.79-7.7 25.78-5.2 33.48 5.6z" />
  </svg>
);

export default SvgLayerPlus;
