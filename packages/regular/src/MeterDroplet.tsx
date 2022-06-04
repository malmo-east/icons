import * as React from "react";
import { SVGProps } from "react";

const SvgMeterDroplet = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M462.1 235.7c5.82-11.73 11.31-24.27 15.79-39.12a51.356 51.356 0 0 1 18.25-26.21C461.8 71.16 367.3 0 256 0 114.6 0 0 114.6 0 256s114.6 256 256 256c53.87 0 103.8-16.72 145-45.14-7.875-14.9-13.08-31.19-15.25-48.59C350.2 446.8 305.1 464 256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48c107.8 0 196.7 82.5 206.1 187.7zM248 128c-8.836 0-16 7.164-16 16v64c0 8.836 7.164 16 16 16h16c8.836 0 16-7.164 16-16v-64c0-8.836-7.164-16-16-16h-16zm80 0c-8.836 0-16 7.164-16 16v64c0 8.836 7.164 16 16 16h16c8.836 0 16-7.164 16-16v-64c0-8.836-7.164-16-16-16h-16zm-160 0c-8.836 0-16 7.164-16 16v64c0 8.836 7.164 16 16 16h16c8.836 0 16-7.164 16-16v-64c0-8.836-7.164-16-16-16h-16zm378.6 77.8c-5.031-18.05-31.5-18.83-37.19 0C479.7 304.3 416 331.2 416 400.7c0 61.5 50.1 111.3 112 111.3s112-49.84 112-111.3c0-69.9-63.5-95.8-93.4-194.9z" />
  </svg>
);

export default SvgMeterDroplet;