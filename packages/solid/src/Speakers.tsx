import * as React from "react";
import { SVGProps } from "react";

const SvgSpeakers = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M112 336c0 35.33 28.69 64 64 64s64-28.67 64-64-28.69-64-64-64-64 28.7-64 64zM256 48c.1-14.78 7.4-36.28 16.4-48H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224.4c-9-11.7-16.3-33.2-16.4-48v-49.79C237.8 432.9 201.1 448 175.9 448c-61.84 0-112-50.17-112-112s50.16-112 112-112c25.2 0 61.9 15.1 80.1 33.8V48zm-80 112c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zM592 0H336c-26.5 0-48 21.5-48 48v416c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM464 64c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zm0 384c-61.81 0-112-50.17-112-112s50.2-112 112-112 112 50.2 112 112-50.2 112-112 112zm0-176c-35.31 0-64 28.67-64 64s28.69 64 64 64 64-28.67 64-64-28.7-64-64-64z" />
  </svg>
);

export default SvgSpeakers;
