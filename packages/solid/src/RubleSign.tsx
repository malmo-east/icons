import * as React from "react";
import { SVGProps } from "react";

const SvgRubleSign = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M240 32c79.5 0 144 64.47 144 144 0 79.5-64.5 144-144 144H128v32h160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128v32c0 17.7-14.3 32-32 32-17.67 0-32-14.3-32-32v-32H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h32v-32H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h32V64c0-17.67 14.33-32 32-32h144zm80 144c0-44.2-35.8-80-80-80H128v160h112c44.2 0 80-35.8 80-80z" />
  </svg>
);

export default SvgRubleSign;
