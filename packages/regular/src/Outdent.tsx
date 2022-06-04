import * as React from "react";
import { SVGProps } from "react";

const SvgOutdent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M32 64c0-13.25 10.75-24 24-24h400c13.3 0 24 10.75 24 24s-10.7 24-24 24H56c-13.25 0-24-10.75-24-24zm192 128c0-13.3 10.7-24 24-24h208c13.3 0 24 10.7 24 24s-10.7 24-24 24H248c-13.3 0-24-10.7-24-24zm232 104c13.3 0 24 10.7 24 24s-10.7 24-24 24H248c-13.3 0-24-10.7-24-24s10.7-24 24-24h208zM32 448c0-13.3 10.75-24 24-24h400c13.3 0 24 10.7 24 24s-10.7 24-24 24H56c-13.25 0-24-10.7-24-24zm6.1-179.6c-6.87-7.3-6.87-18.4 0-24.8l95.7-78c10.5-9.5 25.3-1.2 25.3 12.3v156.2c0 13.5-14.8 20.9-25.3 12.3l-95.7-78z" />
  </svg>
);

export default SvgOutdent;