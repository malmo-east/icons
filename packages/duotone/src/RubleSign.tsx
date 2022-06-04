import * as React from "react";
import { SVGProps } from "react";

const SvgRubleSign = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="ruble-sign_svg__fa-primary"
      d="M64 64c0-17.67 14.33-32 32-32h144c79.5 0 144 64.47 144 144 0 79.5-64.5 144-144 144H128v128c0 17.7-14.3 32-32 32-17.67 0-32-14.3-32-32V320H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h32V64zm64 192h112c44.2 0 80-35.8 80-80s-35.8-80-80-80H128v160z"
    />
    <path
      d="M64 416H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h32v64zm64-64h160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128v-64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgRubleSign;
