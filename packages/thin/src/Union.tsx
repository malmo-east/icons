import * as React from "react";
import { SVGProps } from "react";

const SvgUnion = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M352 40v280c0 88.22-71.78 160-160 160S32 408.2 32 320V40c0-4.41 3.59-8 8-8s8 3.59 8 8v280c0 79.41 64.59 144 144 144s144-64.59 144-144V40c0-4.41 3.6-8 8-8s8 3.59 8 8z" />
  </svg>
);

export default SvgUnion;
