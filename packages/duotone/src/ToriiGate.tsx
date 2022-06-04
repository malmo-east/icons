import * as React from "react";
import { SVGProps } from "react";

const SvgToriiGate = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="torii-gate_svg__fa-primary"
      d="M71.37 23.79C87.68 29.23 104.8 32 121.1 32H390c17.2 0 34.3-2.77 50.6-8.21L512 0v80c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V0l71.37 23.79zM480 224c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h448z"
    />
    <path
      d="M128 128v64H64v-64h64zm160 0v64h-64v-64h64zm160 0v64h-64v-64h64zM64 480V256h64v224c0 17.7-14.3 32-32 32-17.67 0-32-14.3-32-32zm320 0V256h64v224c0 17.7-14.3 32-32 32s-32-14.3-32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgToriiGate;
