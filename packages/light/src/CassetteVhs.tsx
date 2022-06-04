import * as React from "react";
import { SVGProps } from "react";

const SvgCassetteVhs = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm32 384c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V160h512v256zm0-288H32V96c0-17.64 14.36-32 32-32h448c17.64 0 32 14.36 32 32v32zM124.8 400h326.4a16.05 16.05 0 0 0 12.45-5.938C484.8 367.8 496 336.7 496 304s-11.19-63.84-32.36-90.06C460.6 210.2 456 208 451.2 208H124.8a16.05 16.05 0 0 0-12.45 5.938C91.19 240.2 80 271.3 80 304s11.19 63.84 32.36 90.06c3.04 3.74 6.74 5.94 12.44 5.94zM384 336c17.67 0 32-14.33 32-32s-14.33-32-32-32v-32h59.25C456.8 259.1 464 281.1 464 304s-7.156 44.88-20.75 64H384v-32zm-160-96h128v128H224V240zm-91.2 0H192v32c-17.67 0-32 14.33-32 32s14.33 32 32 32v32h-59.2c-13.6-19.1-20.8-41.1-20.8-64s7.2-44.9 20.8-64z" />
  </svg>
);

export default SvgCassetteVhs;
