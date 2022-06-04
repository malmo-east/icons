import * as React from "react";
import { SVGProps } from "react";

const SvgCrop = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M416 400h88c4.4 0 8 3.6 8 8s-3.6 8-8 8h-88v88c0 4.4-3.6 8-8 8s-8-3.6-8-8V123.3L123.3 400H352c4.4 0 8 3.6 8 8s-3.6 8-8 8H120c-13.3 0-24-10.7-24-24V112H8c-4.418 0-8-3.6-8-8a8 8 0 0 1 8-8h88V8c0-4.418 3.58-8 8-8 4.4 0 8 3.582 8 8v380.7L388.7 112H160c-4.4 0-8-3.6-8-8 0-4.42 3.6-8 8-8h244.7l93.6-93.657a8.105 8.105 0 0 1 11.4 0c3.1 3.124 3.1 8.187 0 11.317L416 107.3V400z" />
  </svg>
);

export default SvgCrop;
