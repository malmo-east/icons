import * as React from "react";
import { SVGProps } from "react";

const SvgB = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M257.1 242.4c19-22.3 30.9-50.8 30.9-82.4 0-70.58-57.42-128-128-128H32C14.33 32 0 46.33 0 64v384c0 17.67 14.33 32 32 32l160-.005c70.58 0 128-57.42 128-128 0-46.695-25.4-87.195-62.9-109.595zM64 96.01h96c35.3 0 64 28.7 64 64s-28.7 64-64 64H64v-128zM192 416H64V288h128c35.3 0 64 28.7 64 64s-28.7 64-64 64z" />
  </svg>
);

export default SvgB;
