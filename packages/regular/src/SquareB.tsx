import * as React from "react";
import { SVGProps } from "react";

const SvgSquareB = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm16 384c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h320c8.822 0 16 7.178 16 16v320zm-94.1-168.2c8.8-12.4 14.1-27.5 14.1-43.8 0-41.9-34.1-76-76-76h-92c-13.2 0-24 10.8-24 24v208c0 13.3 10.8 24 24 24h108c41.91 0 76-34.09 76-76 0-24.6-11.9-46.3-30.1-60.2zM176 176h68c15.44 0 28 12.56 28 28s-12.6 28-28 28h-68v-56zm84 160h-84v-56h84c15.4 0 28 12.6 28 28s-12.6 28-28 28z" />
  </svg>
);

export default SvgSquareB;