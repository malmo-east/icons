import * as React from "react";
import { SVGProps } from "react";

const SvgPlug = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="plug_svg__fa-primary"
      d="M0 192c0-17.7 14.33-32 32-32h320c17.7 0 32 14.3 32 32s-14.3 32-32 32v32c0 77.4-55 141.1-128 156.8V512h-64v-99.2C86.97 397.1 32 333.4 32 256v-32c-17.67 0-32-14.3-32-32z"
    />
    <path
      d="M128 160H64V32C64 14.33 78.33 0 96 0c17.7 0 32 14.33 32 32v128zm192 0h-64V32c0-17.67 14.3-32 32-32s32 14.33 32 32v128z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPlug;
