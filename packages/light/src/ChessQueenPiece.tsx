import * as React from "react";
import { SVGProps } from "react";

const SvgChessQueenPiece = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" {...props}>
    <path d="M128 48c13.25 0 24-10.75 24-24S141.3 0 128 0s-24 10.75-24 24 10.8 24 24 24zm114.6 380.4-18.6-9.3V408c0-13.23-10.77-24-24-24H56c-13.23 0-24 10.8-24 24v11.06l-18.58 9.344C5.266 432.3 0 440.7 0 449.9V488c0 13.2 10.77 24 24 24h208c13.23 0 24-10.77 24-24v-38.13c0-9.07-5.2-17.57-13.4-21.47zM224 480H32v-25.12l32-16.09V416h128v22.79l32 16.09V480zM62.38 224H48c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v28.5c-.063 16.64-1.307 33.17-3.266 49.62C59.6 343.6 67.06 352 76.65 352c8.207 0 15.02-6.195 15.97-14.35C94.69 320 96 302.3 96 284.5V256h64v28.5c0 17.82 1.312 35.53 3.377 53.15C164.3 345.8 171.1 352 179.4 352c9.592 0 17.05-8.359 15.91-17.88-2.01-16.42-3.21-33.02-3.31-49.62V256h16c8.8 0 16-7.2 16-16s-7.2-16-16-16h-14.38L244.5 99.7c1.75-3.375.625-7.5-2.5-9.5l-11.12-7.5c-4.58-2.71-8.78.09-10.38 2.3-12.76 16.89-40.25 8.504-40.25-14.75.05-3.91-3.45-6.25-7.15-6.25h-18.12c-2.75-.125-5.25 1.875-6 4.625C147.8 79 138.6 86.38 128 86.38S108.3 79 106.1 68.63c-.7-2.75-3.2-4.75-6-4.63h-19c-2.67 0-5.31 2.96-5.35 6.53-.27 22.81-27.7 30.57-40.25 14.35-1.057-1.41-5.088-5.299-10.38-2.125l-11.13 7.5c-3.125 2-4.25 6.125-2.5 9.5L62.38 224zm-5.63-98.2c14.5-1 28.25-7.875 37.63-19 19.62 15.62 47.5 15.62 67.13.125 12.19 14.47 28.33 18.48 37.75 19L159 224H97l-40.25-98.2z" />
  </svg>
);

export default SvgChessQueenPiece;
