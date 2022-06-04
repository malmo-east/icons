import * as React from "react";
import { SVGProps } from "react";

const SvgFaceMeh = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M160.4 208c0-8.8 7.1-16 16-16 8.8 0 16 7.2 16 16s-7.2 16-16 16c-8.9 0-16-7.2-16-16zm192 0c0 8.8-7.2 16-16 16-8.9 0-16-7.2-16-16s7.1-16 16-16c8.8 0 16 7.2 16 16zM344 344c4.4 0 8 3.6 8 8s-3.6 8-8 8H168c-4.4 0-8-3.6-8-8s3.6-8 8-8h176zm168-88c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 496c132.5 0 240-107.5 240-240S388.5 16 256 16 16 123.5 16 256s107.5 240 240 240z" />
  </svg>
);

export default SvgFaceMeh;
