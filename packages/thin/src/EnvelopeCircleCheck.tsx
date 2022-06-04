import * as React from "react";
import { SVGProps } from "react";

const SvgEnvelopeCircleCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M16 127.1v29.1l204.8 165.2c20.6 16.5 49.8 16.5 70.4 0l33.8-27.3c-1.9 7.7-3.3 15.7-4.1 23.8l-19.7 15.9c-26.4 21.3-64 21.3-90.4 0L15.1 176.7V384c0 26.5 22.39 48 48 48h285.4c3.6 5.6 7.5 10.9 11.7 16H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h384c35.3 0 64 28.65 64 64v32.7c-5.3-.5-10.6-.7-16-.7v-32c0-26.5-21.5-48-48-48H64c-26.51 0-48 21.5-48 48v-.9zm549.7 163.2c3.1 3.2 3.1 8.2 0 11.4l-80 80a8.15 8.15 0 0 1-11.4 0l-48-48a8.15 8.15 0 0 1 0-11.4c3.2-3.1 8.2-3.1 11.4 0l42.3 42.4 74.3-74.4c3.2-3.1 8.2-3.1 11.4 0zM352 336c0-79.5 64.5-144.9 144-144.9S640 256.5 640 336s-64.5 144-144 144-144-64.5-144-144zm144 128c70.7 0 128-57.3 128-128s-57.3-128.9-128-128.9S368 265.3 368 336s57.3 128 128 128z" />
  </svg>
);

export default SvgEnvelopeCircleCheck;