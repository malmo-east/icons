import * as React from "react";
import { SVGProps } from "react";

const SvgDialLow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="dial-low_svg__fa-primary"
      d="M287.6 303.6c8.8 0 16-7.2 16-16s-7.2-16-16-16H128.4c8-80.9 76.2-144 159.2-144 87.5 0 160 71.6 160 160 0 87.5-72.5 160-160 160-83 0-151.2-63.1-159.2-144h159.2z"
    />
    <path
      d="M320 32c0 17.67-14.3 32-32 32s-32-14.33-32-32 14.3-32 32-32 32 14.33 32 32zm256 256c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zM0 288c0-17.7 14.33-32 32-32s32 14.3 32 32-14.33 32-32 32-32-14.3-32-32zM128 96c0 17.7-14.3 32-32 32-17.67 0-32-14.3-32-32 0-17.67 14.33-32 32-32 17.7 0 32 14.33 32 32zm320 0c0-17.67 14.3-32 32-32s32 14.33 32 32c0 17.7-14.3 32-32 32s-32-14.3-32-32zM128 480c0 17.7-14.3 32-32 32-17.67 0-32-14.3-32-32s14.33-32 32-32c17.7 0 32 14.3 32 32zm320 0c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgDialLow;
