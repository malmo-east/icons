import * as React from "react";
import { SVGProps } from "react";

const SvgButter = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="butter_svg__fa-primary"
      d="M640 352c0 17.67-14.33 32-32 32v32c0 17.67-14.33 32-32 32H64c-17.67 0-32-14.33-32-32v-32c-17.67 0-32-14.33-32-32s14.33-32 32-32h576c17.7 0 32 14.3 32 32z"
    />
    <path
      d="M64 96v192h416V64H96c-17.67 0-32 14.33-32 32zm480-32h-32v224h64V96c0-17.67-14.3-32-32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgButter;
