import * as React from "react";
import { SVGProps } from "react";

const SvgBitcoinSign = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M64 24C64 10.75 74.75 0 88 0c13.3 0 24 10.75 24 24v40h32V24c0-13.25 10.7-24 24-24s24 10.75 24 24v40.66c54 5.97 96 51.74 96 107.34 0 27.5-10.3 52.6-27.2 71.6 35.1 17.9 59.2 54.3 59.2 96.4 0 59.6-48.4 108-108 108h-20v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40h-32v40c0 13.3-10.7 24-24 24-13.25 0-24-10.7-24-24v-40H41.74C18.69 448 0 429.3 0 406.3V101.6C0 80.82 16.82 64 37.57 64H64V24zm116 208c33.1 0 60-26.9 60-60s-26.9-60-60-60H48v120h132zM48 280v120h164c33.1 0 60-26.9 60-60s-26.9-60-60-60H48z" />
  </svg>
);

export default SvgBitcoinSign;
