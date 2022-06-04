import * as React from "react";
import { SVGProps } from "react";

const SvgArrowRightFromBracket = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="arrow-right-from-bracket_svg__fa-primary"
      d="m502.6 278.6-128 128c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L402.8 288H192c-17.7 0-32-14.3-32-32s14.31-32 32-32h210.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25 12.49-12.49 32.74-12.51 45.25 0l128 128c12.43 12.53 12.43 32.73-.07 45.23z"
    />
    <path
      d="M160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64c17.67 0 32-14.33 32-32s-14.3-32-32-32H96C42.98 32 0 74.98 0 128v256c0 53.02 42.98 96 96 96h64c17.67 0 32-14.33 32-32s-14.3-32-32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgArrowRightFromBracket;