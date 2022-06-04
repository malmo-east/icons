import * as React from "react";
import { SVGProps } from "react";

const SvgLockKeyhole = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="lock-keyhole_svg__fa-primary"
      d="M384 192c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V256c0-35.3 28.65-64 64-64h320zM256 320c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7 14.3 32 32 32s32-14.3 32-32v-64z"
    />
    <path
      d="M224 64c-44.2 0-80 35.82-80 80v48H80v-48C80 64.47 144.5 0 224 0s144 64.47 144 144v48h-64v-48c0-44.18-35.8-80-80-80z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgLockKeyhole;
