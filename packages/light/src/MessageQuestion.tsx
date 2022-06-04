import * as React from "react";
import { SVGProps } from "react";

const SvgMessageQuestion = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 280c-11.04 0-20 8.953-20 20 0 11 8.1 20 20 20s20-8.955 20-20c0-11.9-9-20-20-20zM448 0H64C28.75 0 0 28.75 0 63.1v287.1c0 37 28.75 64.9 64 64.9h96v83.1c0 9.838 11.03 15.5 19.12 9.649L304 415.1h144c35.25 0 64-28.75 64-63.1V63.1C512 28.75 483.3 0 448 0zm32 352c0 17.6-14.4 32-32 32H303.9a32.004 32.004 0 0 0-19.21 6.406L192 460v-60c0-8.838-7.164-16-16-16H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h384c17.6 0 32 14.4 32 32v288zM278.1 96h-48.4c-29.6 0-53.7 24.1-53.7 53.6 0 8.844 7.156 16 16 16s16-7.156 16-16c0-11.9 9.7-21.6 21.7-21.6h48.47c14.23 0 25.83 11.6 25.83 25.9 0 9.875-5.469 18.75-14.53 23.27L248.6 198.3c-5.3 2.8-8.6 8.3-8.6 14.2V240c0 8.8 7.2 16 16 16s16-7.156 16-16v-17.7l32-16.61c19.75-9.875 32-29.76 32-51.82C336 121.9 310 96 278.1 96z" />
  </svg>
);

export default SvgMessageQuestion;