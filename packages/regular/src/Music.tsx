import * as React from "react";
import { SVGProps } from "react";

const SvgMusic = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M480 0c-3.25 0-6.5.49-9.625 1.49l-304 96.01C153.1 101.8 144 114 144 128v235.1c-15-7.375-31.38-11.12-48-11.12C42.1 352 0 387.8 0 432s42.1 80 95.1 80c49.38 0 89.5-31.12 94.88-71.13.75-2.75 1.123-5.95 1.123-8.825L192 256l272-85.88v129c-15-7.375-31.38-11.12-48.01-11.12-53 0-95.1 35.75-95.1 79.1s42.1 79.1 95.1 79.1c49.38 0 89.51-31.25 95.01-71.13.625-2.75.875-5.5 1-8.25V31.99C512 14.36 497.8 0 480 0zM96 464c-28.25 0-48-16.88-48-32s19.75-32 48-32 48 16.88 48 32-19.8 32-48 32zm368-96c0 15.12-19.75 32-48 32s-48-16.88-48-32 19.75-32 48-32 48 16.9 48 32zm0-248.2-272 85.8v-65.8l272-85.88v65.88z" />
  </svg>
);

export default SvgMusic;
