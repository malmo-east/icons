import * as React from "react";
import { SVGProps } from "react";

const SvgRightToBracket = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m344.7 238.5-144.1-136c-6.9-6.53-17.2-8.33-26-4.55-8.8 3.85-14.5 12.45-14.5 22.05v72H32.02C14.33 192 0 206.3 0 224v64c0 17.68 14.33 32 32.02 32h128.1v72a24.03 24.03 0 0 0 14.51 22.05c8.803 3.781 19.03 1.984 26-4.594l144.1-136c9.57-9.056 9.57-25.856-.03-34.956zM416 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c17.67 0 32 14.33 32 32v256c0 17.67-14.33 32-32 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c53.02 0 96-42.98 96-96V128c0-53.02-43-96-96-96z" />
  </svg>
);

export default SvgRightToBracket;
