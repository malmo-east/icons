import * as React from "react";
import { SVGProps } from "react";

const SvgMagnifyingGlass = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="magnifying-glass_svg__fa-primary"
      d="M500.3 443.7 380.6 324a209.293 209.293 0 0 1-56.57 56.57l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0 15.6-15.57 15.6-40.97 0-56.57z"
    />
    <path
      d="M207.1 0C93.12 0 0 93.13 0 208s93.12 208 207.1 208 208-93.13 208-208S322.9 0 207.1 0zm0 336c-70.58 0-128-57.42-128-128s57.42-128 128-128 128 57.42 128 128c0 70.6-56.5 128-128 128z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgMagnifyingGlass;
