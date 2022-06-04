import * as React from "react";
import { SVGProps } from "react";

const SvgCauldron = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M136 32c0-13.25 10.7-24 24-24s24 10.75 24 24-10.7 24-24 24-24-10.75-24-24zm184 48c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-26.51 21.5-48 48-48s48 21.49 48 48zm-48-16c-8.8 0-16 7.16-16 16s7.2 16 16 16 16-7.16 16-16-7.2-16-16-16zM16 192c-8.836 0-16-7.2-16-16s7.164-16 16-16h416c8.8 0 16 7.2 16 16s-7.2 16-16 16h-39.2c25 36.1 55.2 91.9 55.2 142.4 0 37.4-11.9 69.4-32 95.5V496c0 8.8-7.2 16-16 16s-16-7.2-16-16v-34.2C341.7 494.6 283.4 512 224 512c-59.4 0-117.7-17.4-160-50.2V496c0 8.8-7.16 16-16 16s-16-7.2-16-16v-66.1c-20.07-26.1-32-58.1-32-95.5C0 283.9 30.22 228.1 55.17 192H16zm44.11 52.9C43.73 275 32 307.1 32 334.4c0 45.1 21.37 80.4 56.07 105.5C123.5 465.5 172.6 480 224 480c51.4 0 100.5-14.5 135.9-40.1 34.7-25.1 56.1-60.4 56.1-105.5 0-27.3-11.7-59.4-28.1-89.5-11.9-21.9-25.1-40.6-34.8-52.9H94.9c-9.7 12.3-23.8 31-34.79 52.9z" />
  </svg>
);

export default SvgCauldron;