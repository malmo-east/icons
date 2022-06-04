import * as React from "react";
import { SVGProps } from "react";

const SvgSleigh = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="sleigh_svg__fa-primary"
      d="M0 64c0-17.67 14.33-32 32-32h32c2.31 0 4.56.24 6.74.71 53.36 4.9 103.46 34.88 132.66 81.59l4.3 6.8c40 64 110.1 102.9 185.6 102.9 30.2 0 54.7-24.5 54.7-54.7V128c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32s-14.3 32-32 32v96c0 53-43 96-96 96v64h-64v-64H192v64h-64v-64c-53.02 0-96-43-96-96V96C14.33 96 0 81.67 0 64z"
    />
    <path
      d="M608 352c17.7 0 32 14.3 32 32v8c0 48.6-39.4 88-88 88H64c-17.67 0-32-14.3-32-32s14.33-32 32-32h488c13.3 0 24-10.7 24-24v-8c0-17.7 14.3-32 32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSleigh;
