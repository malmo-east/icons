import * as React from "react";
import { SVGProps } from "react";

const SvgCrop = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="crop_svg__fa-primary"
      d="M64 64v64H32c-17.67 0-32-14.3-32-32 0-17.67 14.33-32 32-32h32zm320 64H160V64h224c35.3 0 64 28.65 64 64v352c0 17.7-14.3 32-32 32s-32-14.3-32-32V128z"
    />
    <path
      d="M457.4 9.372c12.5-12.496 32.7-12.496 45.2 0 12.5 12.498 12.5 32.758 0 45.258l-56.8 56.77c-5.9-22-23.2-39.34-45.2-45.23l56.8-56.798zM384 128v45.3L173.3 384H352v64H128c-35.35 0-64-28.7-64-64V32C64 14.33 78.33 0 96 0c17.7 0 32 14.33 32 32v306.7L338.7 128H384zm64 256h32c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32v-64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCrop;
