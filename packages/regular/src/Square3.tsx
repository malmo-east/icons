import * as React from "react";
import { SVGProps } from "react";

const SvgSquare3 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm16 384c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h320c8.822 0 16 7.178 16 16v320zM245.2 216.5l51.06-46.81a24 24 0 0 0 6.156-26.38C298.8 134.1 289.9 128 280 128H152c-13.2 0-24 10.8-24 24s10.8 24 24 24h66.3l-50.5 46.3c-7.3 6.7-9.8 17.2-6.2 26.4 3.6 9.2 12.5 15.3 22.4 15.3h52c19.84 0 36 16.16 36 36s-16.2 36-36 36h-44.6c-7.547 0-14.2-4.812-16.59-11.97C170.6 311.5 157 304.8 144.4 308.8c-12.58 4.188-19.38 17.78-15.19 30.38C138.2 366 163.1 384 191.4 384H236c46.3 0 84-37.7 84-84 0-43.2-32.8-78.9-74.8-83.5z" />
  </svg>
);

export default SvgSquare3;
