import * as React from "react";
import { SVGProps } from "react";

const SvgBinaryLock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M318 4.53c6.3 4.511 10 11.76 10 19.47v152h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H248c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V57.3l-16.4 5.47c-12.6 4.19-26.2-2.61-30.4-15.18-4.2-12.58 2.6-26.17 15.2-30.36l48-15.998C303.7-1.208 311.8.02 318 4.53zM94.03 292.5C100.3 297 104 304.3 104 312v152h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.25 0-24-10.7-24-24s10.75-24 24-24h32V345.3l-16.41 5.5c-12.58 3.3-26.17-2.6-30.358-15.2C5.04 323 11.84 309.4 24.41 305.2l48-16c7.32-2.4 15.36-1.2 21.62 3.3zM120 0c39.8 0 72 32.24 72 72v80c0 39.8-32.2 72-72 72H72c-39.76 0-72-32.2-72-72V72C0 32.24 32.24 0 72 0h48zM48 152c0 13.3 10.75 24 24 24h48c13.3 0 24-10.7 24-24V72c0-13.25-10.7-24-24-24H72c-13.25 0-24 10.75-24 24v80zm144 208c0-39.8 32.2-72 72-72h48c39.8 0 72 32.2 72 72v80c0 39.8-32.2 72-72 72h-48c-39.8 0-72-32.2-72-72v-80zm72-24c-13.3 0-24 10.7-24 24v80c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-80c0-13.3-10.7-24-24-24h-48zm264-144c44.2 0 80 35.8 80 80v48c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32v-48c0-44.2 35.8-80 80-80zm0 48c-17.7 0-32 14.3-32 32v48h64v-48c0-17.7-14.3-32-32-32z" />
  </svg>
);

export default SvgBinaryLock;
