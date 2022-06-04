import * as React from "react";
import { SVGProps } from "react";

const SvgCircleY = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M369.9 146.8 256 279.7 142.1 146.8c-2.9-3.3-7.9-3.7-11.3-.9-3.4 2.9-3.8 8-.9 11.3L248 294.1V392c0 4.422 3.578 8 8 8s8-3.578 8-8v-97.9l118.1-137.8c2.875-3.344 2.484-8.406-.875-11.28-3.325-2.02-8.425-1.52-11.325 1.78zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 496C123.7 496 16 388.3 16 256S123.7 16 256 16s240 107.7 240 240-107.7 240-240 240z" />
  </svg>
);

export default SvgCircleY;
