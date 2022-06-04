import * as React from "react";
import { SVGProps } from "react";

const SvgOctagon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M320.5.067c19.1 0 37.4 7.585 50.9 21.093L490.8 140.6c13.5 13.5 21.1 31.8 21.1 50.9v129c0 19.1-7.6 37.4-21.1 50.9L371.4 490.8a71.983 71.983 0 0 1-50.9 21.1h-129c-19.1 0-37.4-7.6-50.9-21.1L21.15 371.4A71.975 71.975 0 0 1 .067 320.5v-129c0-19.1 7.585-37.4 21.083-50.9L140.6 21.15A71.975 71.975 0 0 1 191.5.066h129zM32.47 151.9a56.099 56.099 0 0 0-16.4 39.6v129c0 14.8 5.9 29.1 16.4 39.6L151.9 479.5c10.5 10.5 24.8 16.4 39.6 16.4h129c14.8 0 29.1-5.9 39.6-16.4l119.4-119.4c10.5-10.5 16.4-24.8 16.4-39.6v-129c0-14.8-5.9-29.1-16.4-39.6L360.1 32.47a56.099 56.099 0 0 0-39.6-16.4h-129c-14.8 0-29.1 5.9-39.6 16.4L32.47 151.9z" />
  </svg>
);

export default SvgOctagon;
