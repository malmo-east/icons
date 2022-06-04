import * as React from "react";
import { SVGProps } from "react";

const SvgGift = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m256 120.9 53.6-85.69C323.3 13.31 347.3 0 373.1 0h2.9c39.8 0 72 32.24 72 72 0 22.62-10.4 42.8-26.7 56H464c26.5 0 48 21.5 48 48v32c0 20.9-13.4 38.7-32 45.3V448c0 35.3-28.7 64-64 64H96c-35.35 0-64-28.7-64-64V253.3C13.36 246.7 0 228.9 0 208v-32c0-26.5 21.49-48 48-48h42.74C74.43 114.8 64 94.62 64 72c0-39.76 32.24-72 72-72h2.9c25.8 0 49.9 13.31 63.5 35.21L256 120.9zM373.1 16c-20.3 0-39.2 10.46-50 27.69L270.4 128H376c30.9 0 56-25.1 56-56 0-30.93-25.1-56-56-56h-2.9zM241.6 128l-52.7-84.31C178.1 26.46 159.2 16 138.9 16H136c-30.9 0-56 25.07-56 56 0 30.9 25.1 56 56 56h105.6zM48 144c-17.67 0-32 14.3-32 32v32c0 17.7 14.33 32 32 32h200v-96H48zm216 96h200c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32H264v96zm-16 16H48v192c0 26.5 21.49 48 48 48h152V256zm168 240c26.5 0 48-21.5 48-48V256H264v240h152z" />
  </svg>
);

export default SvgGift;
