import * as React from "react";
import { SVGProps } from "react";

const SvgRaygun = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M320 31.97h-16c-8.75 0-16 7.128-16 16v27.24c-14.6-6.97-30.7-11.2-48-11.2L191.1 64 88.23 2.309C77.57-4.09 64 3.573 64 16.01v59.22C26.26 93.25 0 131.4 0 176c0 59.26 46.17 107.3 104.4 111.2L33.92 408c-6.375 11-8.125 24.12-4.75 36.38a47.378 47.378 0 0 0 22.38 29.13l55.38 32c11.12 6.375 24.12 8.125 36.5 4.875 12.25-3.375 22.75-11.38 29.12-22.38L288 288v15.1c0 8.75 7.25 16 16 16h16c8.75 0 15.88-7.001 16-15.75V47.72c-.1-8.75-7.2-15.75-16-15.75zM112 199.1c-13.25 0-24-10.75-24-24s10.75-24 24-24 24 10.75 24 24c0 14.1-10.7 24-24 24zm96 0c-13.25 0-24-10.75-24-24s10.75-24 24-24 24 10.75 24 24c0 14.1-10.7 24-24 24zm361.4-79.7c-4.25-3-9.5-3.875-14.38-2.25L480 142.2h-64V80.01c0-8.875-7.125-16-16-16l-16-.04c-8.75 0-16 7.126-16 16v192c0 8.754 7.25 16 16 16l16 .03c8.875 0 16-7.248 16-16v-65.8h64.13l74.75 25c4.875 1.625 10.25.749 14.5-2.251C573.5 225.9 576 221.1 576 215.9v-83.5c0-5.2-2.5-10-6.6-13z" />
  </svg>
);

export default SvgRaygun;
