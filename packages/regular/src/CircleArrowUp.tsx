import * as React from "react";
import { SVGProps } from "react";

const SvgCircleArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M273.6 119.7c-4.6-4.9-10.9-7.7-17.6-7.7s-13.9 2.8-17.6 7.7l-104 112c-9 9.719-8.438 24.91 1.25 33.94 9.719 9 24.88 8.469 33.94-1.25L232 197.1V368c0 13.25 10.75 24 24 24s24-10.75 24-24V197.1l62.41 67.21c9.062 9.719 24.22 10.25 33.94 1.25 9.688-9.031 10.25-24.22 1.25-33.94l-104-111.92zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208z" />
  </svg>
);

export default SvgCircleArrowUp;
