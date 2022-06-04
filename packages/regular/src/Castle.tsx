import * as React from "react";
import { SVGProps } from "react";

const SvgCastle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M176 64h64V24c0-13.25 10.7-24 24-24s24 10.75 24 24v40h64V24c0-13.25 10.7-24 24-24s24 10.75 24 24v40h64V24c0-13.25 10.7-24 24-24s24 10.75 24 24v200h80v-40c0-13.3 10.7-24 24-24s24 10.7 24 24v256c0 39.8-32.2 72-72 72H72c-39.76 0-72-32.2-72-72V184c0-13.3 10.75-24 24-24s24 10.7 24 24v40h80V24c0-13.25 10.7-24 24-24s24 10.75 24 24v40zm0 48v112h288V112H176zM48 272v168c0 13.3 10.75 24 24 24h184v-80c0-35.3 28.7-64 64-64s64 28.7 64 64v80h184c13.3 0 24-10.7 24-24V272H48z" />
  </svg>
);

export default SvgCastle;
