import * as React from "react";
import { SVGProps } from "react";

const SvgEngine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M256 256c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm-32 0c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm128 0c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm72-168c0 13.3-10.7 24-24 24h-72v32h68.6c12.7 0 25 3.7 35.5 10.7l51.4 34.3c17.8 11.9 28.5 31.9 28.5 53.3V384c0 35.3-28.7 64-64 64H254.8c-19.5 0-37.9-8.8-50-24.9l-32-39.1H144c-35.3 0-64-28.7-64-64v-40H48v72c0 13.3-10.75 24-24 24S0 365.3 0 352V160c0-13.3 10.75-24 24-24s24 10.7 24 24v72h32v-24c0-35.3 28.7-64 64-64h136v-32h-72c-13.3 0-24-10.7-24-24 0-13.25 10.7-24 24-24h192c13.3 0 24 10.75 24 24zM195.9 336l46.4 57.1c3 4.7 7.6 6.9 12.5 6.9H448c8.8 0 16-7.2 16-16V242.3c0-5.4-2.7-10.4-7.1-13.4l-51.4-34.2c-2.6-1.8-5.7-2.7-8.9-2.7H144c-8.8 0-16 7.2-16 16v112c0 8.8 7.2 16 16 16h51.9zM608 192c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32h32z" />
  </svg>
);

export default SvgEngine;
