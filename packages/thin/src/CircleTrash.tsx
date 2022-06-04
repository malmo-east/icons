import * as React from "react";
import { SVGProps } from "react";

const SvgCircleTrash = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m196 160 21.6-28.8c1.5-2 3.9-3.2 6.4-3.2h64c2.5 0 4.9 1.2 6.4 3.2L316 160h36c4.4 0 8 3.6 8 8s-3.6 8-8 8h-9.1l-12.8 178.3c-1.2 16.7-16 29.7-31.9 29.7h-84.4c-16.8 0-30.7-13-31.9-29.7L169.1 176H160c-4.4 0-8-3.6-8-8s3.6-8 8-8h36zm20 0h80l-12-16h-56l-12 16zm110.8 16H185.2l12.6 177.1c.6 8.4 7.6 14.9 16 14.9h84.4c8.4 0 15.4-6.5 16-14.9L326.8 176zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 16C123.5 16 16 123.5 16 256s107.5 240 240 240 240-107.5 240-240S388.5 16 256 16z" />
  </svg>
);

export default SvgCircleTrash;
