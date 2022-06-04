import * as React from "react";
import { SVGProps } from "react";

const SvgPlaceOfWorship = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="m233.4 86.63 75.3-75.31c6.2-6.253 16.4-6.253 22.6 0l75.3 75.31c6 6 9.4 14.17 9.4 22.67v108.3l40.7 24.4c14.5 8.7 23.3 24.3 23.3 41.2V512h-96v-96c0-35.3-28.7-64-64.9-64-34.4 0-64 28.7-64 64v96h-96V283.2c0-16.9 9.7-32.5 24.2-41.2l39.8-24.4V109.3c0-8.5 4.3-16.67 10.3-22.67zM24.87 330.3 128 273.6V512H48c-26.51 0-48-21.5-48-48v-91.6c0-17.5 9.53-33.6 24.87-42.1zM592 512h-80V273.6l103.1 56.7c15.4 8.5 24.9 24.6 24.9 42.1V464c0 26.5-21.5 48-48 48z" />
  </svg>
);

export default SvgPlaceOfWorship;
