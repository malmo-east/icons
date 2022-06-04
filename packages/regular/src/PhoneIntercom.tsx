import * as React from "react";
import { SVGProps } from "react";

const SvgPhoneIntercom = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 296c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zM432 32H208c-19.4 0-37.2 6.91-51.1 18.43C145.4 39.04 129.5 32 112 32H64C28.64 32 0 60.64 0 96v320c0 35.36 28.64 64 64 64h48c17.5 0 33.38-7.039 44.93-18.43C170.8 473.1 188.6 480 208 480h224c44.19 0 80-35.81 80-80V112c0-44.19-35.8-80-80-80zM128 416c0 8.832-7.168 16-16 16H64c-8.832 0-16-7.168-16-16V96c0-8.832 7.168-16 16-16h48c8.8 0 16 7.17 16 16v320zm336-16c0 17.66-14.34 32-32 32H208c-17.66 0-32-14.34-32-32V112c0-17.66 14.34-32 32-32h224c17.66 0 32 14.34 32 32v288zm-56-48h-48c-13.25 0-24 10.75-24 24s10.75 24 24 24h48c13.25 0 24-10.75 24-24s-10.8-24-24-24zm0-240H232c-13.2 0-24 10.8-24 24v80c0 13.25 10.75 24 24 24h176c13.25 0 24-10.75 24-24v-80c0-13.2-10.8-24-24-24zm0 176h-48c-13.25 0-24 10.75-24 24s10.75 24 24 24h48c13.25 0 24-10.75 24-24s-10.8-24-24-24z" />
  </svg>
);

export default SvgPhoneIntercom;
