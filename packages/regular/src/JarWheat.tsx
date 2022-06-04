import * as React from "react";
import { SVGProps } from "react";

const SvgJarWheat = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M32 24C32 10.75 42.75 0 56 0h208c13.3 0 24 10.75 24 24s-10.7 24-24 24H56c-13.25 0-24-10.75-24-24zm96 296c-35.35 0-64-28.7-64-64h48c19.1 0 36.3 8.4 48 21.7 11.7-13.3 28.9-21.7 48-21.7h48c0 35.3-28.7 64-64 64h-64zm0-96c-35.35 0-64-28.7-64-64h48c19.1 0 36.3 8.4 48 21.7 11.7-13.3 28.9-21.7 48-21.7h48c0 35.3-28.7 64-64 64h-64zm48 192v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16h-16c-35.35 0-64-28.7-64-64h48c19.1 0 36.3 8.4 48 21.7 11.7-13.3 28.9-21.7 48-21.7h48c0 35.3-28.7 64-64 64h-16zm80-336c35.3 0 64 28.7 64 64v304c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V144c0-35.3 28.65-64 64-64h192zm0 48H64c-8.84 0-16 7.2-16 16v304c0 8.8 7.16 16 16 16h192c8.8 0 16-7.2 16-16V144c0-8.8-7.2-16-16-16z" />
  </svg>
);

export default SvgJarWheat;