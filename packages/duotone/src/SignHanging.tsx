import * as React from "react";
import { SVGProps } from "react";

const SvgSignHanging = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="sign-hanging_svg__fa-primary"
      d="M160 192c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32v160c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V192z"
    />
    <path
      d="M128 64h352c17.7 0 32 14.33 32 32 0 17.7-14.3 32-32 32H128v352c0 17.7-14.3 32-32 32-17.67 0-32-14.3-32-32V128H32c-17.67 0-32-14.3-32-32 0-17.67 14.33-32 32-32h32V32C64 14.33 78.33 0 96 0c17.7 0 32 14.33 32 32v32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSignHanging;
