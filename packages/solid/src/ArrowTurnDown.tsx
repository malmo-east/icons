import * as React from "react";
import { SVGProps } from "react";

const SvgArrowTurnDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="m342.6 374.6-128 128c-6.2 6.3-14.4 9.4-23.5 9.4s-16.38-3.125-22.63-9.375l-127.1-128c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 402.8V80c0-8.81-7.2-16-16-16H32C14.33 64 0 49.69 0 32S14.33 0 32 0h112c44.1 0 80 35.88 80 80v322.8l73.37-73.38c12.5-12.5 32.75-12.5 45.25 0s12.48 32.68-.02 45.18z" />
  </svg>
);

export default SvgArrowTurnDown;
