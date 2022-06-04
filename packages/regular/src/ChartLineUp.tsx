import * as React from "react";
import { SVGProps } from "react";

const SvgChartLineUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M48 408c0 13.3 10.75 24 24 24h416c13.3 0 24 10.7 24 24s-10.7 24-24 24H72c-39.76 0-72-32.2-72-72V56c0-13.25 10.75-24 24-24s24 10.75 24 24v352zm296-280h112c13.3 0 24 10.7 24 24v112c0 13.3-10.7 24-24 24s-24-10.7-24-24v-54.1L320.1 320.1c-8.5 10.2-23.7 10.2-33.1 0l-79.9-78.2-63 62.2c-8.5 10.2-23.7 10.2-33.1 0-9.3-8.5-9.3-23.7 0-33.1l80-80c9.4-9.3 24.6-9.3 33.1 0l79.9 79.1 94.1-94.1H344c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
  </svg>
);

export default SvgChartLineUp;