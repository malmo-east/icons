import * as React from "react";
import { SVGProps } from "react";

const SvgIdBadge = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M336 0H48C21.49 0 0 21.49 0 48v416c0 26.5 21.49 48 48 48h288c26.51 0 48-21.49 48-48V48c0-26.51-21.5-48-48-48zM192 160c35.35 0 64 28.65 64 64s-28.65 64-64 64-64-28.7-64-64 28.7-64 64-64zm96 256H96c-8.836 0-16-7.164-16-16 0-44.2 35.8-80 80-80h64c44.18 0 80 35.82 80 80 0 8.8-7.2 16-16 16zM240 96h-96c-8.8 0-16-7.16-16-16s7.2-16 16-16h96c8.8 0 16 7.16 16 16s-7.2 16-16 16z" />
  </svg>
);

export default SvgIdBadge;