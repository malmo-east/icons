import * as React from "react";
import { SVGProps } from "react";

const SvgRightToBracket = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="right-to-bracket_svg__fa-primary"
      d="m344.7 273.5-144.1 136a24.064 24.064 0 0 1-26 4.594C165.8 410.3 160.1 401.6 160.1 392v-72H32.02C14.33 320 0 305.7 0 288v-64c0-17.67 14.33-32 32.02-32h128.1v-72a24.03 24.03 0 0 1 14.51-22.05c8.803-3.781 19.03-1.984 26 4.594l144.1 136c9.57 9.056 9.57 25.856-.03 34.956z"
    />
    <path
      d="M416 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c17.67 0 32 14.33 32 32v256c0 17.67-14.33 32-32 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c53.02 0 96-42.98 96-96V128c0-53.02-43-96-96-96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgRightToBracket;
