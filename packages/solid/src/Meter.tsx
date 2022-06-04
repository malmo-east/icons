import * as React from "react";
import { SVGProps } from "react";

const SvgMeter = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm-64 208c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64zm96 0c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64zm96 0c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64z" />
  </svg>
);

export default SvgMeter;
