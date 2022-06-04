import * as React from "react";
import { SVGProps } from "react";

const SvgBan = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM86.7 109.3C52.62 148.6 32 199.9 32 256c0 123.7 100.3 224 224 224 56.1 0 107.4-20.6 146.7-54.7l-316-316zM480 256c0-123.7-100.3-224-224-224-56.1 0-107.4 20.62-146.7 54.7l316 316c34.1-39.3 54.7-90.6 54.7-147.6v.9z" />
  </svg>
);

export default SvgBan;
