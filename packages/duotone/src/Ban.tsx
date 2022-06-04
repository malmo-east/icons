import * as React from "react";
import { SVGProps } from "react";

const SvgBan = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="ban_svg__fa-primary"
      d="M0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm256 192c106 0 192-86 192-192 0-106.9-86-192-192-192-106.9 0-192 85.1-192 192 0 106 85.1 192 192 192z"
    />
    <path
      d="m144.8 99.5 267.7 267.7c-12.4 17.5-27.8 32.9-45.3 45.3L99.5 144.8c11.6-17.5 27.8-32.9 45.3-45.3z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBan;
