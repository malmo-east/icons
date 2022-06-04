import * as React from "react";
import { SVGProps } from "react";

const SvgMapPin = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M320 144c0 79.5-64.5 144-144 144-79.53 0-144-64.5-144-144C32 64.47 96.47 0 176 0c79.5 0 144 64.47 144 144zM192 64c0-8.84-7.2-16-16-16-53.9 0-96 42.98-96 96 0 8.8 7.16 16 16 16 8.8 0 16-7.2 16-16 0-35.3 28.7-64 64-64 8.8 0 16-7.16 16-16zm-48 416V317.1c10.4 1.9 21.1 2 32 2 10.9 0 21.6-.1 32-2V480c0 17.7-14.3 32-32 32s-32-14.3-32-32z" />
  </svg>
);

export default SvgMapPin;