import * as React from "react";
import { SVGProps } from "react";

const SvgChimney = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="chimney_svg__fa-primary"
      d="M416 32H32C14.25 32 0 46.25 0 64v64c0 17.75 14.25 32 32 32h384c17.75 0 32-14.25 32-32V64c0-17.75-14.2-32-32-32z"
    />
    <path
      d="M128 192H32v128h96V192zM32 480h256V352H32v128zm128-288v128h256V192H160zm160 288h96V352h-96v128z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgChimney;
