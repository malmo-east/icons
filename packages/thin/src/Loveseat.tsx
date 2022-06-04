import * as React from "react";
import { SVGProps } from "react";

const SvgLoveseat = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M72 192c4.42 0 8-3.6 8-8v-24c0-61.86 50.14-112 112-112h128c61.86 0 112 50.14 112 112v24c0 4.4 3.6 8 8 8s8-3.6 8-8v-24c0-70.7-57.3-128-128-128H192C121.3 32 64 89.3 64 160v24c0 4.4 3.58 8 8 8zm376 32c-35.35 0-64 28.65-64 64H128c0-35.35-28.65-64-64-64S0 252.7 0 288v160c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-16h256v16c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V288c0-35.3-28.7-64-64-64zM112 448c0 8.824-7.176 16-16 16H32c-8.824 0-16-7.176-16-16V288c0-26.47 21.53-48 48-48s48 21.5 48 48v160zm272-32H128V304h256v112zm112 32c0 8.824-7.176 16-16 16h-64c-8.824 0-16-7.176-16-16V288c0-26.47 21.53-48 48-48s48 21.53 48 48v160z" />
  </svg>
);

export default SvgLoveseat;