import * as React from "react";
import { SVGProps } from "react";

const SvgCommand = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M368 320h-64V192h64c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.82-80 80v64H160v-64c0-44.18-35.8-80-80-80S0 67.82 0 112s35.82 80 80 80h64v128H80c-44.18 0-80 35.8-80 80s35.82 80 80 80 80-35.8 80-80v-64h128v64c0 44.18 35.82 80 80 80s80-35.82 80-80-35.8-80-80-80zm-64-208c0-35.29 28.71-64 64-64s64 28.71 64 64-28.71 64-64 64h-64v-64zM80 176c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64v64H80zm64 224c0 35.29-28.71 64-64 64s-64-28.71-64-64 28.71-64 64-64h64v64zm16-80V192h128v128H160zm208 144c-35.29 0-64-28.71-64-64v-64h64c35.29 0 64 28.71 64 64s-28.7 64-64 64z" />
  </svg>
);

export default SvgCommand;