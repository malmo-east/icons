import * as React from "react";
import { SVGProps } from "react";

const SvgMagnifyingGlassMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="magnifying-glass-minus_svg__fa-primary"
      d="M500.3 443.7 380.6 324a209.293 209.293 0 0 1-56.57 56.57l119.7 119.7c15.62 15.62 40.95 15.63 56.57 0 15.6-15.57 15.6-40.97 0-56.57zM288 184H127.1c-12.4 0-23.1 10.7-23.1 24s10.73 24 23.1 24h160c14.2 0 24.9-10.7 24.9-24s-10.7-24-24-24z"
    />
    <path
      d="M208 0C93.13 0 0 93.13 0 208s93.13 208 208 208 208-93.1 208-208S322.9 0 208 0zm80 232H127.1c-12.4 0-23.1-10.7-23.1-24s10.74-24 23.1-24h160c14.2 0 24.9 10.7 24.9 24s-10.7 24-24 24z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgMagnifyingGlassMinus;
