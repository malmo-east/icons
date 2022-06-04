import * as React from "react";
import { SVGProps } from "react";

const SvgMessageXmark = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 0H64C28.75 0 0 28.75 0 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.1c0 10.6 5.9 15.6 12.2 15.6 2.367 0 4.781-.746 6.945-2.324L304 415.1h144c35.25 0 64-28.75 64-63.1V63.1C512 28.75 483.3 0 448 0zm48 351.1c0 26.46-21.53 47.1-48 47.1H298.7L176 492.1v-92.09H64c-26.47 0-48-21.53-48-47.1V63.99C16 37.53 37.53 15.1 64 15.1h384c26.47 0 48 21.53 48 47.1v288.9zM333.7 130.3a7.994 7.994 0 0 0-11.31 0L256 196.7l-66.3-66.4c-3.125-3.125-8.188-3.125-11.31 0s-3.125 8.188 0 11.31l66.31 65.49-66.4 67.2a7.994 7.994 0 0 0 0 11.31 7.99 7.99 0 0 0 11.31 0L256 219.3l66.34 66.34a7.99 7.99 0 0 0 11.31 0 7.994 7.994 0 0 0 0-11.31L267.3 207.1l66.34-66.34c3.16-2.26 3.16-7.26.06-10.46z" />
  </svg>
);

export default SvgMessageXmark;