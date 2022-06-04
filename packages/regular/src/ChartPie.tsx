import * as React from "react";
import { SVGProps } from "react";

const SvgChartPie = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M304 240V16.58C304 7.555 310.1 0 320 0c123.7 0 224 100.3 224 224 0 9-7.6 16-16.6 16H304zm189.1-48c-14-71.5-69.6-127.96-141.1-141.1V192h141.1zM256 49.61V288l156.5 156.5c6.7 6.7 6.2 17.7-1.5 23.2-39.2 27.9-87.2 44.3-139 44.3-132.5 0-240-107.4-240-240 0-121.3 90.1-221.66 206.1-237.75 10.1-1.26 17.9 6.11 17.9 15.36zM208 307.9V90.91C133.4 117.3 80 188.4 80 272c0 106 85.1 192 192 192 27.2 0 52.1-5.6 76.4-15.8L208 307.9zM558.4 288c9.2 0 16.6 7.8 15.4 17-7.7 55.9-34.7 105.6-73.9 142.3-6 4.8-15.4 5.2-21.2-.6L320 288h238.4z" />
  </svg>
);

export default SvgChartPie;