import * as React from "react";
import { SVGProps } from "react";

const SvgUnion = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M0 288V56c0-13.25 10.75-24 24-24s24 10.75 24 24v232c0 79.41 64.59 144 144 144s144-64.59 144-144V56c0-13.25 10.8-24 24-24s24 10.75 24 24v232c0 105.9-86.13 191.1-192 191.1S0 393.9 0 288z" />
  </svg>
);

export default SvgUnion;
