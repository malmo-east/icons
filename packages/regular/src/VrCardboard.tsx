import * as React from "react";
import { SVGProps } from "react";

const SvgVrCardboard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M576 64H64C28.65 64 0 92.65 0 128v256c0 35.35 28.65 64 64 64h144.7c28.33 0 54.02-16.61 65.65-42.44l14.44-32.08C294.7 360.4 306.8 352 320 352s25.33 8.359 31.23 21.48l14.44 32.08C377.3 431.4 402.1 448 431.3 448H576c35.35 0 64-28.65 64-64V128c0-35.35-28.7-64-64-64zm16 320c0 8.822-7.178 16-16 16H431.3c-9.424 0-18.01-5.553-21.88-14.15l-14.45-32.08C381.4 323.5 351.9 304 320 304s-61.38 19.54-74.99 49.76l-14.45 32.09C226.7 394.4 218.1 400 208.7 400H64c-8.822 0-16-7.178-16-16V128c0-8.822 7.178-16 16-16h512c8.822 0 16 7.178 16 16v256zM176 176c-35.38 0-64 28.62-64 64s28.62 64 64 64 64-28.62 64-64-28.6-64-64-64zm288 0c-35.38 0-64 28.62-64 64s28.62 64 64 64 64-28.62 64-64-28.6-64-64-64z" />
  </svg>
);

export default SvgVrCardboard;