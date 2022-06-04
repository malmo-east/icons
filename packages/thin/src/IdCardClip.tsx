import * as React from "react";
import { SVGProps } from "react";

const SvgIdCardClip = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M528 64H392c-4.4 0-8 3.58-8 8s3.582 8 8 8h136c17.67 0 32 14.33 32 32v352c0 17.67-14.33 32-32 32H48c-17.67 0-32-14.33-32-32V112c0-17.67 14.33-32 32-32h136c4.4 0 8-3.58 8-8s-3.6-8-8-8H48C21.49 64 0 85.49 0 112v352c0 26.5 21.49 48 48 48h480c26.51 0 48-21.49 48-48V112c0-26.51-21.5-48-48-48zm-272 64h64c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32h-64c-17.7 0-32 14.33-32 32v64c0 17.7 14.3 32 32 32zm-16-96c0-8.824 7.178-16 16-16h64c8.822 0 16 7.176 16 16v64c0 8.824-7.178 16-16 16h-64c-8.8 0-16-7.2-16-16V32zm48 288c35.35 0 64-28.65 64-64s-28.65-64-64-64-64 28.7-64 64 28.7 64 64 64zm0-112c26.47 0 48 21.53 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM176 440c0 4.4 3.6 8 8 8s8-3.6 8-8v-8c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v8c0 4.422 3.578 8 8 8s8-3.578 8-8v-8c0-44.11-35.89-80-80-80h-64c-44.11 0-80 35.89-80 80v8z" />
  </svg>
);

export default SvgIdCardClip;