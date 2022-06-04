import * as React from "react";
import { SVGProps } from "react";

const SvgMobileSignal = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M496 304c8.8 0 16-7.2 16-16s-7.156-16-16-16c-123.5 0-224 100.5-224 224 0 8.844 7.156 16 16 16s16-7.156 16-16c0-105.9 86.1-192 192-192zM288 64v240c0 8.836 7.164 16 16 16s16-7.2 16-16V64c0-35.35-28.65-64-64-64H64C28.65 0 0 28.65 0 64v384c0 35.35 28.65 64 64 64h144c8.8 0 16-7.2 16-16s-7.2-16-16-16H64c-17.67 0-32-14.33-32-32V64c0-17.67 14.33-32 32-32h192c17.7 0 32 14.33 32 32zM128 400c-8.836 0-16 7.162-16 16 0 8.836 7.164 16 16 16h64c8.836 0 16-7.164 16-16 0-8.838-7.164-16-16-16h-64zm352 48c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.3-32-32-32zm16-96c-79.41 0-144 64.59-144 144 0 8.844 7.156 16 16 16s16-7.156 16-16c0-61.75 50.25-112 112-112 8.844 0 16-7.156 16-16s-7.2-16-16-16z" />
  </svg>
);

export default SvgMobileSignal;
