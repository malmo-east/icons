import * as React from "react";
import { SVGProps } from "react";

const SvgUserLarge = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M351.1 320H160C71.64 320 0 391.63 0 480c0 17.67 14.33 32 31.1 32H480c17.67 0 31.1-14.33 31.1-32 .9-88.4-70.7-160-160-160zM480 496H31.1c-7.92 0-15.1-7.2-15.1-16 0-79.4 64.6-144 144-144h191.1c80.3 0 144.9 64.6 144.9 144 0 8.8-7.2 16-16 16zM256 288c79.53 0 144-64.47 144-144S335.53 0 256 0c-79.52 0-144 64.47-144 144s64.5 144 144 144zm0-272c70.58 0 128 57.42 128 128s-57.42 128-128 128-128-57.42-128-128S185.4 16 256 16z" />
  </svg>
);

export default SvgUserLarge;
