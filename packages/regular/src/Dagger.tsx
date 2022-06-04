import * as React from "react";
import { SVGProps } from "react";

const SvgDagger = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M341.8 127.1 216 128V23.1C216 10.75 205.3 0 192 0s-24 10.75-24 23.1V128l-125.79-.9c-20.93 0-39.961 16-42.009 36.8C-2.155 187.9 16.53 208 40 208c19.25 0 34.63-13.88 38.38-32H112v232l63.38 95.13C179.4 509 185.6 512 191.1 512c6.375 0 12.62-3 16.62-8.875L272 408V176h33.63c3.75 18.12 19.13 32 38.38 32 23.47 0 42.16-20.11 39.8-44.07-2.01-20.83-21.11-36.83-42.01-36.83zM224 393.5l-32 48-32-48V176h64v217.5z" />
  </svg>
);

export default SvgDagger;
