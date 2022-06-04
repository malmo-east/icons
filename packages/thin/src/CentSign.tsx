import * as React from "react";
import { SVGProps } from "react";

const SvgCentSign = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M192 0c4.4 0 8 3.582 8 8v56.01c43.7.42 84.1 14.6 116.7 38.29 3.6 2.6 4.4 7.6 1.8 11.2-2.6 3.6-7.6 4.4-11.2 1.8C276.9 93.14 239 80 197.1 80 97.24 80 16 159 16 256c0 96.1 81.24 176 181.1 176 41.9 0 79.8-13.1 110.2-35.3 3.6-2.6 8.6-1.8 11.2 1.8 2.6 3.6 1.8 8.6-1.8 11.2-32.6 23.7-73 37.9-116.7 37.4V504c0 4.4-3.6 8-8 8s-8-3.6-8-8v-56.5C81.39 440.6 0 357.7 0 256S81.39 71.43 184 64.47V8c0-4.418 3.6-8 8-8z" />
  </svg>
);

export default SvgCentSign;
