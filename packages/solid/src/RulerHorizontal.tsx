import * as React from "react";
import { SVGProps } from "react";

const SvgRulerHorizontal = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M0 176c0-26.5 21.49-48 48-48h64v80c0 8.8 7.2 16 16 16s16-7.2 16-16v-80h64v80c0 8.8 7.2 16 16 16s16-7.2 16-16v-80h64v80c0 8.8 7.2 16 16 16s16-7.2 16-16v-80h64v80c0 8.8 7.2 16 16 16s16-7.2 16-16v-80h64v80c0 8.8 7.2 16 16 16s16-7.2 16-16v-80h64c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V176z" />
  </svg>
);

export default SvgRulerHorizontal;