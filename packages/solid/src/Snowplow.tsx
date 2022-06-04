import * as React from "react";
import { SVGProps } from "react";

const SvgSnowplow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M144 400c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm192 0c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24zm-32 0c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm-128 0c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24zm271.4-150.4c.4 2.3.7 4.7.6 7.1V288h64v-52.8c0-14.5 4.9-28.6 14-40l57-71.2c11.1-13.8 31.2-16.9 44.1-5 14.7 11.1 16.9 31.2 5 44.1L576 235.2v167.5l54.6 54.7c12.5 12.5 12.5 32.7 0 45.2s-32.7 12.5-45.2 0L530.7 448c-12-12.9-18.7-28.3-18.7-45.3V352h-42.8c6.9 14.5 10.8 30.8 10.8 48 0 61.9-50.1 112-112 112H112C50.14 512 0 461.9 0 400c0-44.7 26.16-83.2 64-101.2V192c0-17.7 14.33-32 32-32h32V48c0-26.51 21.5-48 48-48h122.9c25.6 0 48.7 15.26 58.8 38.79l87.4 203.91c1 2.2 1.8 4.5 2.3 6.9zM298.9 64H192v96l64 64h111.5L298.9 64zM368 352H112c-26.51 0-48 21.5-48 48s21.49 48 48 48h256c26.5 0 48-21.5 48-48s-21.5-48-48-48z" />
  </svg>
);

export default SvgSnowplow;
