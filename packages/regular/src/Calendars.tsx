import * as React from "react";
import { SVGProps } from "react";

const SvgCalendars = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M224 0c13.3 0 24 10.75 24 24v40h112V24c0-13.25 10.7-24 24-24s24 10.75 24 24v40h40c35.3 0 64 28.65 64 64v224c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64V128c0-35.35 28.7-64 64-64h40V24c0-13.25 10.7-24 24-24zm-80 352c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16V192H144v160zm-96 40c0 39.8 32.24 72 72 72h272c13.3 0 24 10.7 24 24s-10.7 24-24 24H120C53.73 512 0 458.3 0 392V184c0-13.3 10.75-24 24-24s24 10.7 24 24v208z" />
  </svg>
);

export default SvgCalendars;