import * as React from "react";
import { SVGProps } from "react";

const SvgCropSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M128 376c0 4.4 3.6 8 8 8h216v48H136c-30.9 0-56-25.1-56-56V128H24c-13.25 0-24-10.7-24-24 0-13.25 10.75-24 24-24h56V24c0-13.25 10.75-24 24-24 13.3 0 24 10.75 24 24v352zm256-240c0-4.4-3.6-8-8-8H160V80h216c30.9 0 56 25.1 56 56v248h56c13.3 0 24 10.7 24 24s-10.7 24-24 24h-56v56c0 13.3-10.7 24-24 24s-24-10.7-24-24V136z" />
  </svg>
);

export default SvgCropSimple;
