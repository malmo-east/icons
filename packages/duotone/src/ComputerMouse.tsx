import * as React from "react";
import { SVGProps } from "react";

const SvgComputerMouse = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="computer-mouse_svg__fa-primary"
      d="M384 192v32H0v-32h176V0h32v192h176z"
    />
    <path
      d="M176 0h-16C71.63 0 0 71.63 0 160v32h176V0zM0 352c0 88.38 71.63 160 160 160h64c88.38 0 160-71.63 160-160V224H0v128zM224 0h-16v192h176v-32C384 71.63 312.4 0 224 0z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgComputerMouse;
