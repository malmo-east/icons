import * as React from "react";
import { SVGProps } from "react";

const SvgSquarePhone = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="m342.5 303.6-54.24-23.25c-6.391-2.766-13.9-.906-18.24 4.484L248 311.744c-34.63-17-62.77-45.14-79.77-79.75l26.91-22.05a15.643 15.643 0 0 0 4.492-18.22L176.4 137.5c-3-7-10.6-10.8-17.9-9.1L108.1 140c-7.125 1.625-12.11 7.891-12.11 15.22 0 126.1 102.6 228.8 228.7 228.8 7.336 0 13.6-4.984 15.24-12.11l11.62-50.39c1.75-7.32-2.05-14.92-9.05-17.92zM384 32H64C28.65 32 0 60.66 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96c0-35.34-28.7-64-64-64zm16 384c0 8.82-7.178 16-16 16H64c-8.822 0-16-7.18-16-16V96c0-8.82 7.178-16 16-16h320c8.822 0 16 7.18 16 16v320z" />
  </svg>
);

export default SvgSquarePhone;