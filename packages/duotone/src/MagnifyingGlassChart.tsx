import * as React from "react";
import { SVGProps } from "react";

const SvgMagnifyingGlassChart = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="magnifying-glass-chart_svg__fa-primary"
      d="M104 216c0-13.3 10.7-24 24-24s24 10.7 24 24v64c0 13.3-10.7 24-24 24s-24-10.7-24-24v-64zm80-96c0-13.3 10.7-24 24-24s24 10.7 24 24v160c0 13.3-10.7 24-24 24s-24-10.7-24-24V120zm80 64c0-13.3 10.7-24 24-24s24 10.7 24 24v96c0 13.3-10.7 24-24 24s-24-10.7-24-24v-96zm193.4 318.6L330.7 375.1c17.3-11.8 32.6-27.1 44.4-44.4l127.5 126.7c12.5 12.5 12.5 32.7 0 45.2s-32.7 12.5-45.2 0z"
    />
    <path
      d="M0 208C0 93.12 93.12 0 208 0c114.9 0 208 93.12 208 208 0 114.9-93.1 208-208 208C93.12 416 0 322.9 0 208zm104 72c0 13.3 10.7 24 24 24s24-10.7 24-24v-64c0-13.3-10.7-24-24-24s-24 10.7-24 24v64zm80 0c0 13.3 10.7 24 24 24s24-10.7 24-24V120c0-13.3-10.7-24-24-24s-24 10.7-24 24v160zm80 0c0 13.3 10.7 24 24 24s24-10.7 24-24v-96c0-13.3-10.7-24-24-24s-24 10.7-24 24v96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgMagnifyingGlassChart;
