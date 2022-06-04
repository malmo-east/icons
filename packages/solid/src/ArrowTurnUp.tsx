import * as React from "react";
import { SVGProps } from "react";

const SvgArrowTurnUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M342.6 182.6c-6.2 6.3-14.4 9.4-23.5 9.4s-16.38-3.125-22.62-9.375L224 109.3V432c0 44.13-35.89 80-80 80H32c-17.67 0-32-14.31-32-32s14.33-32 32-32h112c8.8 0 16-7.2 16-16V109.3l-73.38 73.3c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l127.1-128c12.5-12.5 32.75-12.5 45.25 0l128 128c13.38 12.55 13.38 32.75.88 45.25z" />
  </svg>
);

export default SvgArrowTurnUp;
