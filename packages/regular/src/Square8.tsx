import * as React from "react";
import { SVGProps } from "react";

const SvgSquare8 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm16 384c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h320c8.822 0 16 7.178 16 16v320zm-96-216c0-39.7-32.3-72-72-72h-16c-39.7 0-72 32.3-72 72 0 15.77 5.254 30.26 13.9 42.13C139.8 256.8 128 278.9 128 304c0 44.1 35.9 80 80 80h32c44.13 0 80-35.88 80-80 0-25.06-11.81-47.19-29.9-61.87C298.7 230.3 304 215.8 304 200zm-88-24h16c13.2 0 24 10.8 24 24s-10.8 24-24 24h-16c-13.2 0-24-10.8-24-24s10.8-24 24-24zm24 160h-32c-17.66 0-32-14.34-32-32s14.34-32 32-32h32c17.66 0 32 14.34 32 32s-14.3 32-32 32z" />
  </svg>
);

export default SvgSquare8;
