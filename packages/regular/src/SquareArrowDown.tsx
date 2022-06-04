import * as React from "react";
import { SVGProps } from "react";

const SvgSquareArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="m310.4 231.7-62.41 67.21V152c0-13.25-10.76-24-24.01-24S200 138.8 200 152v146.9l-62.4-67.2c-9.1-9.8-24.2-10.3-33.9-1.3-9.72 9-10.29 24.2-1.3 33.9l104 112c3.7 4.9 10.9 7.7 17.6 7.7s13.04-2.781 17.6-7.656l104-112c9-9.719 8.438-24.91-1.25-33.94-9.75-9.004-24.85-8.504-33.95 1.296zM384 32H64C28.65 32 0 60.66 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96c0-35.34-28.7-64-64-64zm16 384c0 8.82-7.178 16-16 16H64c-8.822 0-16-7.18-16-16V96c0-8.82 7.178-16 16-16h320c8.822 0 16 7.18 16 16v320z" />
  </svg>
);

export default SvgSquareArrowDown;