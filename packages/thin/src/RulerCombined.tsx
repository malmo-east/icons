import * as React from "react";
import { SVGProps } from "react";

const SvgRulerCombined = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 304c35.3 0 64 28.7 64 64v80c0 35.3-28.7 64-64 64H64c-30.93 0-56.732-21.9-62.7-51.1C.448 456.7 0 452.4 0 448V64C0 28.65 28.65 0 64 0h80c35.3 0 64 28.65 64 64v240h240zm-256-96v-80h-88c-4.42 0-8-3.6-8-8s3.58-8 8-8h88V64c0-26.51-21.5-48-48-48H64c-26.51 0-48 21.49-48 48v384c0 3.3.34 6.6.98 9.7C21.45 479.6 40.82 496 64 496h384c26.5 0 48-21.5 48-48v-80c0-26.5-21.5-48-48-48h-48v88c0 4.4-3.6 8-8 8s-8-3.6-8-8v-88h-80v88c0 4.4-3.6 8-8 8s-8-3.6-8-8v-88h-80v88c0 4.4-3.6 8-8 8s-8-3.6-8-8v-88h-88c-4.42 0-8-3.6-8-8s3.58-8 8-8h88v-80h-88c-4.42 0-8-3.6-8-8s3.58-8 8-8h88z" />
  </svg>
);

export default SvgRulerCombined;
