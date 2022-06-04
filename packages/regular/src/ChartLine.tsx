import * as React from "react";
import { SVGProps } from "react";

const SvgChartLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M48 408c0 13.3 10.75 24 24 24h416c13.3 0 24 10.7 24 24s-10.7 24-24 24H72c-39.76 0-72-32.2-72-72V56c0-13.25 10.75-24 24-24s24 10.75 24 24v352zm288.1-103.9c-8.5 10.2-23.7 10.2-33.1 0l-79.9-78.2-79 78.2c-8.5 10.2-23.7 10.2-33.1 0-9.3-8.5-9.3-23.7 0-33.1l96-96c4.5-4.5 10.6-7 16.1-7 7.3 0 13.4 2.5 17 7l79.9 79.1L439 135c9.4-9.3 24.6-9.3 33.1 0 10.2 9.4 10.2 24.6 0 33.1l-136 136z" />
  </svg>
);

export default SvgChartLine;
