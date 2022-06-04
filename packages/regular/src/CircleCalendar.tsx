import * as React from "react";
import { SVGProps } from "react";

const SvgCircleCalendar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M208 112c8.8 0 16 7.2 16 16v16h64v-16c0-8.8 7.2-16 16-16s16 7.2 16 16v16h16c26.5 0 48 21.5 48 48v128c0 26.5-21.5 48-48 48H176c-26.5 0-48-21.5-48-48V192c0-26.5 21.5-48 48-48h16v-16c0-8.8 7.2-16 16-16zm128 208v-96H176v96h160zm176-64c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z" />
  </svg>
);

export default SvgCircleCalendar;