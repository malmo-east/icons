import * as React from "react";
import { SVGProps } from "react";

const SvgCross = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="cross_svg__fa-primary"
      d="M383.1 160v64c0 17.62-14.37 32-31.1 32H32c-17.63 0-32-14.4-32-32v-64c0-17.62 14.38-32 32-32h320c17.6 0 31.1 14.4 31.1 32z"
    />
    <path
      d="M224 0h-64c-17.6 0-32 14.38-32 32v96h128V32c0-17.62-14.4-32-32-32zm-96 480c0 17.62 14.38 32 32 32h64c17.62 0 32-14.38 32-32V256H128v224z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCross;
