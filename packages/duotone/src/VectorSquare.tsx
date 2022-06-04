import * as React from "react";
import { SVGProps } from "react";

const SvgVectorSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="vector-square_svg__fa-primary"
      d="M416 32c17.7 0 32 14.33 32 32v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32V64c0-17.67 14.3-32 32-32h64zm-48 48v32h32V80h-32zM0 384c0-17.7 14.33-32 32-32h64c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H32c-17.67 0-32-14.3-32-32v-64zm80 48v-32H48v32h32zm240-48c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-64zm80 48v-32h-32v32h32zM0 64c0-17.67 14.33-32 32-32h64c17.7 0 32 14.33 32 32v64c0 17.7-14.3 32-32 32H32c-17.67 0-32-14.3-32-32V64zm80 48V80H48v32h32z"
    />
    <path
      d="M320 128H128V64h192v64zm0 320H128v-64h192v64zM32 160h64v192H32V160zm384 192h-64V160h64v192z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgVectorSquare;
