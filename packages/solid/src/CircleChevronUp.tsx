import * as React from "react";
import { SVGProps } from "react";

const SvgCircleChevronUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm134.6 310.6c-12.5 12.5-32.75 12.5-45.25 0L256 221.3l-89.4 89.3c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l112-112C239.6 147.1 247.8 144 256 144s16.38 3.125 22.62 9.375l112 112C403.1 277.9 403.1 298.1 390.6 310.6z" />
  </svg>
);

export default SvgCircleChevronUp;