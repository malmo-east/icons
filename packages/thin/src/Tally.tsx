import * as React from "react";
import { SVGProps } from "react";

const SvgTally = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M127.1 32c5.3 0 8 3.58 8 8v268.9l112-37.3V40c0-4.42 4.5-8 8-8 5.3 0 8 3.58 8 8v226.2L376 228.9V40c0-4.42 3.6-8 8-8s8 3.58 8 8v183.6l112-37.4V40c0-4.42 3.6-8 8-8s8 3.58 8 8v140.9l85.5-28.5c4.2-1.4 8.7.9 10.1 5.1.5 4.2-.9 8.7-5.1 10.1L520 197.8V472c0 4.4-3.6 8-8 8s-8-3.6-8-8V203.1l-112 37.3V472c0 4.4-3.6 8-8 8s-8-3.6-8-8V245.8l-112.9 37.3V472c0 4.4-2.7 8-8 8-3.5 0-8-3.6-8-8V288.4l-112 37.4V472c0 4.4-2.7 8-8 8-3.5 0-8-3.6-8-8V331.1l-84.57 28.5c-4.19.5-8.72-.9-10.12-5.1-1.4-4.2.87-8.7 5.06-10.1l89.63-30.2V40c0-4.42 4.5-8 8-8z" />
  </svg>
);

export default SvgTally;