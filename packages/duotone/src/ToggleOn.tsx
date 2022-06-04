import * as React from "react";
import { SVGProps } from "react";

const SvgToggleOn = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="toggle-on_svg__fa-primary"
      d="M480 256c0 53-43 96-96 96-53.9 0-96-43-96-96 0-53.9 42.1-96 96-96 53 0 96 42.1 96 96z"
    />
    <path
      d="M384 64c106 0 192 85.1 192 192 0 106-86 192-192 192H192C85.96 448 0 362 0 256 0 149.1 85.96 64 192 64h192zm0 288c53 0 96-43 96-96 0-53.9-43-96-96-96-53.9 0-96 42.1-96 96 0 53 42.1 96 96 96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgToggleOn;
