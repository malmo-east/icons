import * as React from "react";
import { SVGProps } from "react";

const SvgHighDefinition = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm48 384c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V96c0-26.47 21.53-48 48-48h448c26.47 0 48 21.53 48 48v320zM264 160c-4.4 0-8 3.6-8 8v80H128v-80c0-4.4-3.6-8-8-8s-8 3.6-8 8v176c0 4.4 3.6 8 8 8s8-3.6 8-8v-80h128v80c0 4.4 3.6 8 8 8s8-3.578 8-8V168c0-4.4-3.6-8-8-8zm120 0h-56c-4.4 0-8 3.6-8 8v176c0 4.422 3.594 8 8 8h56c52.94 0 96-43.06 96-96s-43.1-96-96-96zm0 176h-48V176h48c44.13 0 80 35.89 80 80s-35.9 80-80 80z" />
  </svg>
);

export default SvgHighDefinition;
