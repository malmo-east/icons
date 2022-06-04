import * as React from "react";
import { SVGProps } from "react";

const SvgPiano = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="piano_svg__fa-primary"
      d="M0 352V184.5C0 82.63 82.5 0 184.5 0h15C301.5 0 384 82.63 384 184.5c0 24.25 13.75 46.38 35.38 57.25l57.18 28.47C498.2 281.1 512 303.3 512 327.5V352h-96v56c0 4.375-3.625 8-8 8h-16c-4.4 0-8-3.6-8-8v-56h-32v56c0 4.375-3.625 8-8 8h-16c-4.4 0-8-3.6-8-8v-56h-64v56c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-56h-32v56c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-56h-32v56c0 4.4-3.6 8-8 8h-16c-4.37 0-8-3.6-8-8v-56H0z"
    />
    <path
      d="M0 480V352h64v96h384v-96h64v128c0 17.62-14.38 32-32 32H32c-17.62 0-32-14.4-32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPiano;
