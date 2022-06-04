import * as React from "react";
import { SVGProps } from "react";

const SvgHelicopterSymbol = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M320 66.66V1.985C435.8 16.42 527.6 108.2 542 224h-64.7C463.9 143.6 400.4 80.15 320 66.66zM320 510v-64.6c80.4-13.5 143.9-77 157.3-157.4H542c-14.4 115.8-106.2 207.6-222 222zM33.98 288h64.67C112.1 368.4 175.6 431.9 256 445.4V510C140.2 495.6 48.42 403.8 33.98 288zM256 1.984V66.66C175.6 80.15 112.1 143.6 98.66 224H33.98C48.42 108.2 140.2 16.42 256 1.985v-.001zM240 224h96v-64c0-17.7 14.3-32 32-32s32 14.3 32 32v192c0 17.7-14.3 32-32 32s-32-14.3-32-32v-64h-96v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32v64z" />
  </svg>
);

export default SvgHelicopterSymbol;
