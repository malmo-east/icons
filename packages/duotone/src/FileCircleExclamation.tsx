import * as React from "react";
import { SVGProps } from "react";

const SvgFileCircleExclamation = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="file-circle-exclamation_svg__fa-primary"
      d="M224 160V0l160 160H224zm64 208c0-79.5 64.5-144 144-144s144 64.5 144 144-64.5 144-144 144-144-64.5-144-144zm144 96c13.3 0 24-10.7 24-24s-10.7-24-24-24-24 10.7-24 24 10.7 24 24 24zm-16.9-176v80c0 8.8 8.1 16 16 16 9.7 0 16-7.2 16-16v-80c0-8.8-6.3-16-16-16-7.9 0-16 7.2-16 16z"
    />
    <path
      d="M0 64C0 28.65 28.65 0 64 0h160v160h160v38.6c-73.9 20.9-128 88.8-128 169.4 0 59.1 29.1 111.3 73.7 143.3-3.1.4-6.4.7-9.7.7H64c-35.35 0-64-28.7-64-64V64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgFileCircleExclamation;
