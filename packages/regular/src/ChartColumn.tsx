import * as React from "react";
import { SVGProps } from "react";

const SvgChartColumn = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M24 32c13.25 0 24 10.75 24 24v352c0 13.3 10.75 24 24 24h416c13.3 0 24 10.7 24 24s-10.7 24-24 24H72c-39.76 0-72-32.2-72-72V56c0-13.25 10.75-24 24-24zm144 192c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24s-24-10.7-24-24v-80c0-13.3 10.7-24 24-24zm120 104c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24s24 10.7 24 24v176zm72-136c13.3 0 24 10.7 24 24v112c0 13.3-10.7 24-24 24s-24-10.7-24-24V216c0-13.3 10.7-24 24-24zm120 136c0 13.3-10.7 24-24 24s-24-10.7-24-24V88c0-13.25 10.7-24 24-24s24 10.75 24 24v240z" />
  </svg>
);

export default SvgChartColumn;
