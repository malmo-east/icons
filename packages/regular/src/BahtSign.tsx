import * as React from "react";
import { SVGProps } from "react";

const SvgBahtSign = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M160 24v40h20c59.6 0 108 48.4 108 108 0 27.5-10.3 52.6-27.2 71.6 35.1 17.9 59.2 54.3 59.2 96.4 0 59.6-48.4 108-108 108h-52v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40H41.74C18.69 448 0 429.3 0 406.3V101.6C0 80.82 16.82 64 37.57 64H112V24c0-13.25 10.7-24 24-24s24 10.75 24 24zm-48 88H48v120h64V112zm68 120c33.1 0 60-26.9 60-60s-26.9-60-60-60h-20v120h20zm-68 48H48v120h64V280zm100 120c33.1 0 60-26.9 60-60s-26.9-60-60-60h-52v120h52z" />
  </svg>
);

export default SvgBahtSign;