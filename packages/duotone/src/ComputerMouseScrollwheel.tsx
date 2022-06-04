import * as React from "react";
import { SVGProps } from "react";

const SvgComputerMouseScrollwheel = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="computer-mouse-scrollwheel_svg__fa-primary"
      d="M224 159.1c0 18.5-14.4 32.9-32 32.9s-32-14.4-32-32.9v-32c0-17.62 14.38-32 32-32 17.62 0 32 14.38 32 32v32z"
    />
    <path
      d="M224 0h-64C71.62 0 0 71.62 0 160v192c0 88.38 71.62 160 160 160h64c88.38 0 160-71.63 160-160V160C384 71.62 312.4 0 224 0zm0 159.1c0 18.5-14.4 32.9-32 32.9s-32-14.4-32-32.9v-32c0-17.62 14.38-32 32-32 17.62 0 32 14.38 32 32v32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgComputerMouseScrollwheel;