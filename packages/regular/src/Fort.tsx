import * as React from "react";
import { SVGProps } from "react";

const SvgFort = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M224 160c0 5.5-.7 10.9-2.9 16H418c-1.3-5.1-2-10.5-2-16V24c0-13.25 10.7-24 24-24 7.1 0 13.4 3.051 17.8 7.907C461.7 12.16 464 17.81 464 24v40h40V24c0-6.19 2.3-11.84 6.2-16.093C514.6 3.051 520.9 0 528 0c7.1 0 13.4 3.051 17.8 7.907C549.7 12.16 552 17.81 552 24v40h40V24c0-6.19 2.3-11.84 6.2-16.093C602.6 3.051 608.9 0 616 0c13.3 0 24 10.75 24 24v136c0 23.7-12.9 44.4-32 55.4V448c0 35.3-28.7 64-64 64H96c-35.35 0-64-28.7-64-64V215.4c-19.13-11-32-31.7-32-55.4V24C0 10.75 10.75 0 24 0c7.06 0 13.41 3.051 17.81 7.907A23.904 23.904 0 0 1 48 24v40h40V24c0-6.19 2.34-11.84 6.19-16.093C98.59 3.051 104.9 0 112 0c7.1 0 13.4 3.051 17.8 7.907C133.7 12.16 136 17.81 136 24v40h40V24c0-6.19 2.3-11.84 6.2-16.093C186.6 3.051 192.9 0 200 0c13.3 0 24 10.75 24 24v136zm-176 0c0 8.8 7.16 16 16 16h96c8.8 0 16-7.2 16-16v-48H48v48zm400 304V224H192v240h64v-80c0-35.3 28.7-64 64-64s64 28.7 64 64v80h64zm48 0h48c8.8 0 16-7.2 16-16V224h-64v240zm-400 0h48V224H80v224c0 8.8 7.16 16 16 16zm480-288c8.8 0 16-7.2 16-16v-48H464v48c0 8.8 7.2 16 16 16h96z" />
  </svg>
);

export default SvgFort;
