import * as React from "react";
import { SVGProps } from "react";

const SvgForwardFast = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 96.03v319.9c0 17.67-14.33 31.1-31.1 31.1-18.6.07-32.9-13.43-32.9-31.93v-131L276.5 440.6c-20.6 17.1-52.5 2.7-52.5-25.5v-131L52.5 440.6C31.88 457.7 0 443.3 0 415.1V96.03c0-27.37 31.88-41.74 52.5-24.62L224 226.8V96.03c0-27.37 31.88-41.74 52.5-24.62L448 226.8V96.03c0-17.67 14.33-31.1 31.1-31.1 18.6-.9 32.9 13.43 32.9 31.1z" />
  </svg>
);

export default SvgForwardFast;
