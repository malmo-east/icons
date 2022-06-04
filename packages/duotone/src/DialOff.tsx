import * as React from "react";
import { SVGProps } from "react";

const SvgDialOff = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="dial-off_svg__fa-primary"
      d="M304 288c0-8.8-7.2-16-16-16s-16 7.2-16 16v159.2c-80.9-8-144-77.1-144-159.2 0-88.4 71.6-160 160-160s160 71.6 160 160c0 82.1-63.1 151.2-144 159.2V288z"
    />
    <path
      d="M320 32c0 17.67-14.3 32-32 32s-32-14.33-32-32 14.3-32 32-32 32 14.33 32 32zm256 256c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zM0 288c0-17.7 14.33-32 32-32s32 14.3 32 32-14.33 32-32 32-32-14.3-32-32zM128 96c0 17.7-14.3 32-32 32-17.67 0-32-14.3-32-32 0-17.67 14.33-32 32-32 17.7 0 32 14.33 32 32zm320 0c0-17.67 14.3-32 32-32s32 14.33 32 32c0 17.7-14.3 32-32 32s-32-14.3-32-32zM128 480c0 17.7-14.3 32-32 32-17.67 0-32-14.3-32-32s14.33-32 32-32c17.7 0 32 14.3 32 32zm320 0c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgDialOff;