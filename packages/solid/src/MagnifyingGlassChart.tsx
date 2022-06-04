import * as React from "react";
import { SVGProps } from "react";

const SvgMagnifyingGlassChart = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M416 208c0 45.9-14.9 88.3-40.9 122.7l127.5 126.7c12.5 12.5 12.5 32.7 0 45.2s-32.7 12.5-45.2 0L330.7 375.1c-34.4 26-76.8 40.9-122.7 40.9C93.12 416 0 322.9 0 208 0 93.12 93.12 0 208 0c114.9 0 208 93.12 208 208zm-312 72c0 13.3 10.7 24 24 24s24-10.7 24-24v-64c0-13.3-10.7-24-24-24s-24 10.7-24 24v64zm80 0c0 13.3 10.7 24 24 24s24-10.7 24-24V120c0-13.3-10.7-24-24-24s-24 10.7-24 24v160zm80 0c0 13.3 10.7 24 24 24s24-10.7 24-24v-96c0-13.3-10.7-24-24-24s-24 10.7-24 24v96z" />
  </svg>
);

export default SvgMagnifyingGlassChart;