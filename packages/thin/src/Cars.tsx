import * as React from "react";
import { SVGProps } from "react";

const SvgCars = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="m49.32 118.1-1.01-.3 22.05-77.18C77.23 16.57 99.2 0 124.2 0h135.6c25 0 47 16.57 53.8 40.62l22.1 77.18-1 .3c13.6 5.6 25.2 14.9 33.8 26.6-6 .7-11.9 2-18.4 3.8-10.8-12.6-27.5-20.5-46.1-20.5H80c-35.35 0-64 28.7-64 64v64h259.8l-4.6 16H16v56c0 4.4-3.58 8-8 8-4.418 0-8-3.6-8-8V192c0-33.3 20.36-61.9 49.32-73.9zm16.95-4.9c4.46-.8 9.05-1.2 12.83-1.2h224c5.6 0 10.2.4 14.6 1.2l-19.4-68.19c-5-17.17-20.6-29.91-38.5-29.91H124.2c-17.9 0-33.55 12.74-38.46 29.91L66.27 113.2zM47.1 192c0-17.7 15.23-32 32-32 18.57 0 32 14.3 32 32s-13.43 32-32 32c-16.77 0-32-14.3-32-32zm32-16c-7.94 0-16 7.2-16 16s8.06 16 16 16c9.74 0 16-7.2 16-16s-6.26-16-16-16zm224 192c0-17.7 15.2-32 32.9-32s32 14.3 32 32-14.3 32-32 32-32.9-14.3-32.9-32zm32.9-16c-8.8 0-16.9 7.2-16.9 16s8.1 16 16.9 16c8.8 0 16-7.2 16-16s-7.2-16-16-16zm256 16c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm-32 16c8.8 0 16-7.2 16-16s-7.2-16-16-16-16 7.2-16 16 7.2 16 16 16zm-254.7-89.9-1-.3 22.1-77.2c6.8-24 28.8-40.6 53.8-40.6h135.6c25 0 47 16.6 53.8 40.6l22.1 77.2-1 .3c28.9 12 49.3 40.6 49.3 73.9v136c0 4.4-3.6 8-8 8s-8-3.6-8-8v-56H271.1v56c0 4.4-2.7 8-8 8-3.5 0-8-3.6-8-8V368c0-33.3 21.3-61.9 50.2-73.9zm17-4.9c4.4-.8 9-1.2 13.7-1.2h224c4.7 0 9.3.4 13.7 1.2L554.3 221c-5-17.2-20.6-29.9-38.5-29.9H380.2c-17.9 0-33.5 12.7-38.5 29.9l-19.4 68.2zM624 432v-64c0-35.3-28.7-64-64-64H336c-35.3 0-64.9 28.7-64.9 64v64H624z" />
  </svg>
);

export default SvgCars;