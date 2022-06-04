import * as React from "react";
import { SVGProps } from "react";

const SvgOilCan = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M280 112v48h88.9c9.9 0 19.7 2.3 28.6 6.8L448 192l167-35.8c18.1-3.9 30.7 17.6 18.5 31.5L451.1 394.3c-13 13.8-29.6 21.7-48 21.7H144c-26.5 0-48-21.5-48-48v-21.3l-67.49-30C11.17 308.1 0 291.8 0 272.8V208c0-26.5 21.49-48 48-48h184v-48h-48c-13.3 0-24-10.7-24-24 0-13.25 10.7-24 24-24h144c13.3 0 24 10.75 24 24 0 13.3-10.7 24-24 24h-48zm94.6 100.6c-1.8-.9-3.7-1.4-5.7-1.4H147.2v153.6h255.9c3.7 0 7.2-1.6 9.6-4.3l118.1-133.9-89.6 19.2-66.6-33.2zM96 294.1V208H48v64.8l48 21.3z" />
  </svg>
);

export default SvgOilCan;