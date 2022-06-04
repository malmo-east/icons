import * as React from "react";
import { SVGProps } from "react";

const SvgSink = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M496 288H384v-16c0-8.812 7.172-15.1 16-15.1h64c8.844 0 16-7.156 16-15.1s-7.2-17.8-16-17.8h-64c-26.5 0-48 21.5-48 48v16h-80V80c0-26.47 21.5-48 48-48s48 21.53 48 48v32c0 8.844 7.156 15.1 16 15.1s16-6.3 16-15.1V80c0-44.12-35.9-80-80-80s-80 35.88-80 80v208h-80v-16c0-26.5-21.5-48-48-48H48c-8.84 0-16 7.2-16 16s7.16 16 16 16h64c8.8 0 16 7.2 16 16v16H16c-8.844 0-16 7.156-16 16s7.156 16 16 16h480c8.844 0 16-7.156 16-15.1s-7.2-16.9-16-16.9zm-32 64c-8.844 0-16 7.156-16 16v32c0 44.13-35.89 80-80 80H144c-44.11 0-80-35.9-80-80v-32c0-8.8-7.16-16-16-16s-16 7.2-16 16v32c0 61.8 50.25 112 112 112h224c61.75 0 112-50.25 112-112v-32c0-8.8-7.2-16-16-16z" />
  </svg>
);

export default SvgSink;