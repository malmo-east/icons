import * as React from "react";
import { SVGProps } from "react";

const SvgHockeyPuck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="hockey-puck_svg__fa-primary"
      d="M512 160v192c0 53-114.6 96-256 96S0 405 0 352V160c0 53 114.6 96 256 96s256-43 256-96z"
    />
    <path
      d="M512 160c0 53-114.6 96-256 96S0 213 0 160s114.6-96 256-96 256 43 256 96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgHockeyPuck;
