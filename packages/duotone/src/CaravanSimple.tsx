import * as React from "react";
import { SVGProps } from "react";

const SvgCaravanSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="caravan-simple_svg__fa-primary"
      d="M416 32c88.4 0 160 71.6 160 160v160h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H302.9c-7.8-54.3-54.5-96-110.9-96-56.4 0-103.1 41.7-110.87 96H80c-44.18 0-80-35.8-80-80V112c0-44.18 35.82-80 80-80h336zM64 224c0 17.7 14.33 32 32 32h128c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32H96c-17.67 0-32 14.3-32 32v64zm288-96c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32h-64z"
    />
    <path
      d="M64 160c0-17.7 14.33-32 32-32h128c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.67 0-32-14.3-32-32v-64zm256 0c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-64zM112 432c0-44.2 35.8-80 80-80s80 35.8 80 80-35.8 80-80 80-80-35.8-80-80z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCaravanSimple;
