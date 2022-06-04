import * as React from "react";
import { SVGProps } from "react";

const SvgUserLarge = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 288c79.53 0 144-64.47 144-144S335.53 0 256 0c-79.52 0-144 64.47-144 144s64.5 144 144 144zm0-240c52.94 0 96 43.06 96 96 0 52.93-43.06 96-96 96-52.93 0-96-43.07-96-96 0-52.94 43.1-96 96-96zm95.1 272H160C71.64 320 0 391.63 0 480c0 17.67 14.33 32 31.1 32H480c17.67 0 31.1-14.33 31.1-32 .9-88.4-70.7-160-160-160zM49.14 464c7.787-54.21 54.54-96 110.9-96h191.1c56.33 0 103.1 41.79 110.9 96H49.14z" />
  </svg>
);

export default SvgUserLarge;