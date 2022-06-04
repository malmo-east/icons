import * as React from "react";
import { SVGProps } from "react";

const SvgSquareDashed = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="square-dashed_svg__fa-primary"
      d="M64 192v128H0V192h64zm384 0v128h-64V192h64zM160 480v-64h128v64H160zm0-448h128v64H160V32z"
    />
    <path
      d="M96 32h32v64H96c-17.67 0-32 14.3-32 32v32H0v-32c0-53.02 42.98-96 96-96zm0 384h32v64H96c-53.02 0-96-43-96-96v-32h64v32c0 17.7 14.33 32 32 32zm256 64h-32v-64h32c17.7 0 32-14.3 32-32v-32h64v32c0 53-43 96-96 96zm96-320h-64v-32c0-17.7-14.3-32-32-32h-32V32h32c53 0 96 42.98 96 96v32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSquareDashed;
