import * as React from "react";
import { SVGProps } from "react";

const SvgElevator = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 128H64c-35.35 0-64 28.65-64 63.1v255.1C0 483.3 28.65 512 64 512h384c35.35 0 64-28.65 64-63.1V192c0-35.3-28.7-64-64-64zm16 320c0 8.822-7.178 16-16 16h-16v-64c0-26.51-21.49-48-48-48h-64c-26.51 0-48 21.49-48 48v64h-32v-64c0-26.5-21.5-48-48-48h-64c-26.51 0-48 21.49-48 48v64H64c-8.822 0-16-7.178-16-16V192c0-8.822 7.178-16 16-16h384c8.822 0 16 7.178 16 16v256zM160 224c-26.5.1-48 21.5-48 48 0 26.46 21.47 47.9 48 48 26.5-.1 48-21.5 48-48s-21.5-47.9-48-48zm192 0c-26.5.1-48 21.5-48 48 0 26.46 21.47 47.9 48 48 26.5-.1 48-21.5 48-48s-21.5-47.9-48-48zM79 96h130c5.967 0 11.37-3.402 13.75-8.662 2.385-5.262 1.299-11.39-2.754-15.59l-65-67.34c-5.684-5.881-16.31-5.881-21.99 0l-65 67.34C63.95 75.95 62.87 82.08 65.25 87.34 67.63 92.6 73.03 96 79 96zm278-4.41c5.686 5.881 16.31 5.881 21.99 0l65-67.34c4.053-4.199 5.137-10.32 2.754-15.59C444.4 3.402 438.1 0 433 0H303c-5.967 0-11.37 3.402-13.75 8.662-2.385 5.262-1.301 11.39 2.752 15.59L357 91.59z" />
  </svg>
);

export default SvgElevator;