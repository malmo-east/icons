import * as React from "react";
import { SVGProps } from "react";

const SvgBuildingFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="building-flag_svg__fa-primary"
      d="M624 32c8.8 0 16 7.16 16 16v128c0 8.8-7.2 16-16 16H480v320h-64V32c0-17.67 14.3-32 32-32s32 14.33 32 32h144z"
    />
    <path
      d="M336 0c26.5 0 48 21.49 48 48v416c0 26.5-21.5 48-48 48h-96v-80c0-26.5-21.5-48-48-48s-48 21.5-48 48v80H48c-26.51 0-48-21.5-48-48V48C0 21.49 21.49 0 48 0h288zM64 272c0 8.8 7.16 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16H80c-8.84 0-16 7.2-16 16v32zm112-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32zm80 48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v32zM80 96c-8.84 0-16 7.2-16 16v32c0 8.8 7.16 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16H80zm80 48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v32zm112-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBuildingFlag;