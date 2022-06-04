import * as React from "react";
import { SVGProps } from "react";

const SvgPoliceBox = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M104 144c0-4.4 3.6-8 8-8h24v32h-32v-24zm0 40h32v32h-24c-4.4 0-8-3.6-8-8v-24zm80-40v24h-32v-32h24c4.4 0 8 3.6 8 8zm-32 40h32v24c0 4.4-3.6 8-8 8h-24v-32zm80-48v32h-32v-24c0-4.4 3.6-8 8-8h24zm0 80h-24c-4.4 0-8-3.6-8-8v-24h32v32zm16-80h24c4.4 0 8 3.6 8 8v24h-32v-32zm32 72c0 4.4-3.6 8-8 8h-24v-32h32v24zm-176 40c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16v-48zM192 0c8.8 0 16 7.164 16 16v16h80c17.7 0 32 14.33 32 32 17.7 0 32 14.33 32 32v368h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.25 0-24-10.7-24-24s10.75-24 24-24h8V96c0-17.67 14.33-32 32-32 0-17.67 14.33-32 32-32h80V16c0-8.836 7.2-16 16-16zM80 464h224V112H80v352z" />
  </svg>
);

export default SvgPoliceBox;
