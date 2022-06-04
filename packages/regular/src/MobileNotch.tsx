import * as React from "react";
import { SVGProps } from "react";

const SvgMobileNotch = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M240 400h-96c-8.8 0-16 7.2-16 16s7.164 16 16 16h96c8.838 0 16-7.164 16-16s-7.2-16-16-16zM304 0H80C44.65 0 16 28.65 16 64v384c0 35.35 28.65 64 64 64h224c35.35 0 64-28.65 64-64V64c0-35.35-28.7-64-64-64zm16 448c0 8.822-7.178 16-16 16H80c-8.82 0-16-7.2-16-16V64c0-8.822 7.178-16 16-16h48v32c0 8.84 7.2 16 16 16h96c8.8 0 16-7.16 16-16V48h48c8.8 0 16 7.18 16 16v384z" />
  </svg>
);

export default SvgMobileNotch;