import * as React from "react";
import { SVGProps } from "react";

const SvgNairaSign = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="naira-sign_svg__fa-primary"
      d="M86.73 33.37c13.47-4.08 28.07 1.15 35.87 12.88L320 342.3V64c0-17.67 14.3-32 32-32s32 14.33 32 32v384c0 14.1-9.2 26.5-22.7 30.6-13.5 4.1-28.1-1.1-35.9-12.8L128 169.7V448c0 17.7-14.3 32-32 32-17.67 0-32-14.3-32-32V64c0-14.1 9.23-26.54 22.73-30.63z"
    />
    <path
      d="M64 320H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h32v64zm64-64h57.5l42.7 64H128v-64zm192 0v64h-14.9l-42.6-64H320zm96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32v-64h32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgNairaSign;
