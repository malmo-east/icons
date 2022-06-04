import * as React from "react";
import { SVGProps } from "react";

const SvgBicycle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M347.1 32c6 0 11.5 3.36 14.3 8.7l99.4 193.9c15.7-6.8 33-10.6 51.2-10.6 70.7 0 128 57.3 128 128s-57.3 128-128 128-128-57.3-128-128c0-46.8 25.1-87.7 62.6-110.9l-29.8-57.3-89.7 171.9c-1.4 2.6-5 4.3-7.1 4.3h-64.2C251.6 426.1 196 480 128 480 57.31 480 0 422.7 0 352s57.31-128 128-128c12.9 0 25.4 1.9 37.2 5.5l26.9-61-36.5-56.5H104c-4.42 0-8-3.6-8-8 0-4.42 3.58-8 8-8h56c2.7 0 5.2 1.38 6.7 3.66L205.6 160h197.2c.6 0 1.2 0 1.8.1L347.1 48h-52c-3.5 0-8-3.58-8-8s4.5-8 8-8h52zM400 352c0 61.9 50.1 112 112 112s112-50.1 112-112-50.1-112-112-112c-15.6 0-30.4 3.2-43.9 8.9l51 99.4c2 4 .5 8.8-3.4 10.8-4 2-8.8.5-10.8-3.4l-51-99.5C421.6 275.9 400 311.4 400 352zM158.7 244.3c-9.8-2.8-20-4.3-31.6-4.3-60.96 0-112 50.1-112 112s51.04 112 112 112c60.1 0 108.5-45.9 112.6-104H124.9c-8.1 0-13.5-8.3-10.2-15.7l44-100zM305.3 344 202.5 184.6 132.3 344h173zm-90.2-168 104.2 160.1L402.8 176H215.1z" />
  </svg>
);

export default SvgBicycle;
