import * as React from "react";
import { SVGProps } from "react";

const SvgSquareALock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M16 96v320c0 26.5 21.49 48 48 48h256v16H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v65.1c-5.5.8-10.8 2-16 3.5V96c0-26.51-21.5-48-48-48H64c-26.51 0-48 21.49-48 48zm215.2 36.4 95.5 191.1c-3.5 7-6.6 14.7-6.5 22.9l-9.1-19.3H136.9l-25.7 52.5c-2 3.9-6.8 5.5-10.8 3.6-3.93-2-5.53-6.8-3.56-10.8l119.96-240c1.4-2.7 3.3-4.4 7.2-4.4 3 0 5.8 1.7 7.2 4.4zm-86.3 178.7h158.2L224 153.9l-79.1 157.2zM464 192c35.3 0 64 28.7 64 64v64h16c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H384c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32h16v-64c0-35.3 28.7-64 64-64zm0 16c-26.5 0-48 21.5-48 48v64h96v-64c0-26.5-21.5-48-48-48zm-96 144v128c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16V352c0-8.8-7.2-16-16-16H384c-8.8 0-16 7.2-16 16z" />
  </svg>
);

export default SvgSquareALock;
