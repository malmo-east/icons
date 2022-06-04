import * as React from "react";
import { SVGProps } from "react";

const SvgTractor = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M152 0h114.3c22.9 0 43.5 13.94 52 35.2L368.2 160H480v-41.8c0-23.58 5.5-46.85 16-67.96l2.5-4.97c6-11.86 20.4-16.66 32.2-10.74 11.9 5.93 16.7 20.35 10.8 32.2l-3.4 4.98C531.8 86.15 528 102.1 528 118.2V160h56c30.9 0 56 25.1 56 56v32.7c0 22.1-10.1 42.9-27.5 56.6l-21.3 15.8c-16.2-9.2-35-15.5-55.1-16.8l46.7-36.8c5.8-5.4 9.2-11.5 9.2-18.8V216c0-4.4-3.6-8-8-8H296.9l14.9 14.9c12.5 12.5 12.5 32.7 0 45.2l-6.7 5.8c3.1 4.6 5 9.3 6.7 14.1h7.3c18.6 0 32.9 14.3 32.9 32v16h94.4c-14.1 13.1-25 29.5-31.6 48h-103c-1.7 4.8-3.6 9.5-6.7 14.1l6.7 5.8c12.5 12.5 12.5 32.7 0 45.2l-22.7 22.7c-12.5 12.5-32.7 12.5-45.2 0l-5.8-6.7c-4.6 3.1-9.3 5-14.1 6.7v8.2c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-8.2c-4.8-1.7-9.5-3.6-14.1-6.7l-5.8 6.7c-12.48 12.5-32.74 12.5-45.24 0l-22.62-22.7c-12.5-12.5-12.5-32.7 0-45.2l5.79-5.8c-2.18-4.6-4.13-9.3-5.84-14.1H32c-17.67 0-32-14.3-32-32v-32c0-17.7 14.33-32 32-32h8.19c1.71-4.8 3.66-9.5 5.84-14.1l-5.79-5.8c-12.5-12.5-12.5-32.7 0-45.2l22.62-22.7c8.96-8.9 21.92-11.5 33.14-7.6V56c0-30.93 25.1-56 56-56zm0 48c-4.4 0-8 3.58-8 8v104h172.6L273.8 53.03c-1.3-3.04-4.2-5.03-7.5-5.03H152zm24 368c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80zm264 8c0-48.6 39.4-88 88-88s88 39.4 88 88-39.4 88-88 88-88-39.4-88-88zm88 40c22.1 0 40-17.9 40-40s-17.9-40-40-40-40 17.9-40 40 17.9 40 40 40z" />
  </svg>
);

export default SvgTractor;