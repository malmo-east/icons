import * as React from "react";
import { SVGProps } from "react";

const SvgCirclePause = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M208 160c-8.8 0-16 7.2-16 16v160c0 8.8 7.2 16 16 16s16-7.2 16-16V176c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16v160c0 8.844 7.156 16 16 16s16-7.156 16-16V176c0-8.8-7.2-16-16-16zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224z" />
  </svg>
);

export default SvgCirclePause;
