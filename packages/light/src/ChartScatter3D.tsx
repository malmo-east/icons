import * as React from "react";
import { SVGProps } from "react";

const SvgChartScatter3D = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m272 280.6 202.3 171.2c6.8 5.7 7.6 15.8 1.9 22.5-5.7 6.8-15.8 7.6-22.5 1.9L256 308.1 58.34 476.2c-6.75 5.7-16.85 4.9-22.55-1.9-5.71-6.7-4.87-16.8 1.87-22.5L240 280.6V48c0-8.84 7.2-16 16-16s16 7.16 16 16v232.6zM360 64c0-13.25 10.7-24 24-24s24 10.75 24 24-10.7 24-24 24-24-10.75-24-24zm48 192c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm48-96c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24zm-304 0c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zM8 64c0-13.25 10.75-24 24-24s24 10.75 24 24-10.75 24-24 24S8 77.25 8 64zm48 192c0 13.3-10.75 24-24 24S8 269.3 8 256s10.75-24 24-24 24 10.7 24 24zm176 192c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24z" />
  </svg>
);

export default SvgChartScatter3D;