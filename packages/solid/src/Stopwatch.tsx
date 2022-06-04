import * as React from "react";
import { SVGProps } from "react";

const SvgStopwatch = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M272 0c17.7 0 32 14.33 32 32s-14.3 32-32 32h-16v34.45c37.5 5.75 71.7 21.55 99.7 44.55l21.7-21.6c12.5-12.5 32.7-12.5 45.2 0s12.5 32.7 0 45.2l-24.1 24.2C419.7 223.3 432 262.2 432 304c0 114.9-93.1 208-208 208S16 418.9 16 304c0-104 76.32-190.2 176-205.55V64h-16c-17.7 0-32-14.33-32-32s14.3-32 32-32h96zm-24 192c0-13.3-10.7-24-24-24s-24 10.7-24 24v128c0 13.3 10.7 24 24 24s24-10.7 24-24V192z" />
  </svg>
);

export default SvgStopwatch;
