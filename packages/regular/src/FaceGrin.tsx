import * as React from "react";
import { SVGProps } from "react";

const SvgFaceGrin = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M349.5 308.4c18.7-5.3 35.9 12 24.6 28.1-23.7 38.1-67.8 62.6-118.2 62.6-50.3 0-94.4-24.5-119-62.6-10.4-16.1 6.8-33.4 25.4-28.1 29 6.7 60.5 10.4 93.6 10.4 33.1 0 64.7-3.7 93.6-10.4zM208.4 208c0 17.7-14.4 32-32 32-17.7 0-32-14.3-32-32s14.3-32 32-32c17.6 0 32 14.3 32 32zm96 0c0-17.7 14.3-32 32-32 17.6 0 32 14.3 32 32s-14.4 32-32 32c-17.7 0-32-14.3-32-32zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z" />
  </svg>
);

export default SvgFaceGrin;
