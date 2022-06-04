import * as React from "react";
import { SVGProps } from "react";

const SvgArchway = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M480 32c17.7 0 32 14.33 32 32s-14.3 32-32 32H32C14.33 96 0 81.67 0 64s14.33-32 32-32h448zM32 128h448v288c17.7 0 32 14.3 32 32s-14.3 32-32 32H352V352c0-53.9-43-96-96-96-53.9 0-96 42.1-96 96v128H32c-17.67 0-32-14.3-32-32s14.33-32 32-32V128z" />
  </svg>
);

export default SvgArchway;