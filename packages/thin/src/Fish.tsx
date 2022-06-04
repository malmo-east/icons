import * as React from "react";
import { SVGProps } from "react";

const SvgFish = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M384 256c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm32-16c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zM180.5 370.5c-16.2-13.8-30.5-28.6-42.7-43.2l-89.68 52.3c-12.51 7.3-28.36 5.3-38.646-4.9a31.989 31.989 0 0 1-5.258-38.6L50 256 4.216 175.9a31.989 31.989 0 0 1 5.258-38.6c10.286-10.2 26.136-12.2 38.646-4.9l89.68 52.3c12.2-14.6 26.5-29.4 42.7-43.2C219.7 108.5 272.6 80 336 80c63.4 0 116.3 28.5 155.5 61.5 39 33 66.8 71.6 80.9 99.8 4.8 9.2 4.8 20.2 0 29.4-14.1 27.3-41.9 66.8-80.9 99.8-39.2 33-92.1 61.5-155.5 61.5-63.4 0-116.3-28.5-155.5-61.5zm10.3-12.3C228.2 389.8 277.5 416 336 416c58.5 0 107.8-26.2 145.1-57.8 37.4-31.5 63-69.2 77.1-94.9 2.4-4.6 2.4-10 0-14.6-14.1-26.6-39.7-63.4-77.1-94.9C443.8 122.2 394.5 96 336 96s-107.8 26.2-145.2 57.8c-15.4 13-29 26.3-40.7 41.1l-8.6 10.4-101.44-59.1c-6.25-3.7-14.18-2.7-19.32 2.4-5.15 5.1-6.23 13.1-2.63 19.3l50.32 87.2-50.32 89c-3.6 6.2-2.52 14.2 2.63 19.3 5.14 5.1 13.07 6.1 19.32 2.4l101.44-59.1 8.6 10.4c11.7 13.9 25.3 28.1 40.7 41.1z" />
  </svg>
);

export default SvgFish;