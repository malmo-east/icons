import * as React from "react";
import { SVGProps } from "react";

const SvgChartArea = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M48 408c0 13.3 10.75 24 24 24h416c13.3 0 24 10.7 24 24s-10.7 24-24 24H72c-39.76 0-72-32.2-72-72V56c0-13.25 10.75-24 24-24s24 10.75 24 24v352zm311.6-255.6c13.1-13.1 34.8-12.3 46.9 1.8l61.9 72.3c7.5 8.7 11.6 19.8 11.6 31.3V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V243.9c0-12.7 5.1-25 14.1-34l91.3-91.3c12.5-12.5 32.7-12.5 45.2 0L320 192l39.6-39.6zM224 163.9l-80 80V336h288v-78.2l-50.7-59.2-27.4 27.3c-9 9-21.2 14.1-33.9 14.1s-24.9-5.1-33.9-14.1l-62.1-62z" />
  </svg>
);

export default SvgChartArea;
