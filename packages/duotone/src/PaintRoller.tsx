import * as React from "react";
import { SVGProps } from "react";

const SvgPaintRoller = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="paint-roller_svg__fa-primary"
      d="M0 64C0 28.65 28.65 0 64 0h288c35.3 0 64 28.65 64 64v64c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V64z"
    />
    <path
      d="M512 192c0 53-43 96-96 96H272c-8.8 0-16 7.2-16 16v16c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32v-16c0-44.2 35.8-80 80-80h144c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32V64c53 0 96 42.1 96 96v32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPaintRoller;