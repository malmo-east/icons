import * as React from "react";
import { SVGProps } from "react";

const SvgTicketSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M576 208c-26.5 0-48 21.5-48 48s21.5 48 48 48v80c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64v-80c26.51 0 48-21.5 48-48s-21.49-48-48-48v-80c0-35.35 28.65-64 64-64h448c35.3 0 64 28.65 64 64v80zM64 80c-26.51 0-48 21.5-48 48v66c27.6 7.1 48 32.2 48 62 0 29.8-20.4 54.9-48 61.1V384c0 26.5 21.49 48 48 48h448c26.5 0 48-21.5 48-48v-66.9c-27.6-6.2-48-31.3-48-61.1s20.4-54.9 48-62v-66c0-26.5-21.5-48-48-48H64z" />
  </svg>
);

export default SvgTicketSimple;
