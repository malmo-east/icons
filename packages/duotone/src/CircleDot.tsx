import * as React from "react";
import { SVGProps } from "react";

const SvgCircleDot = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="circle-dot_svg__fa-primary"
      d="M352 256c0 53-43 96-96 96-53.9 0-96-43-96-96 0-53.9 42.1-96 96-96 53 0 96 42.1 96 96z"
    />
    <path
      d="M0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm256 96c53 0 96-43 96-96 0-53.9-43-96-96-96-53.9 0-96 42.1-96 96 0 53 42.1 96 96 96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCircleDot;
