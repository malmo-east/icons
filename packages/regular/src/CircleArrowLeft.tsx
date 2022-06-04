import * as React from "react";
import { SVGProps } from "react";

const SvgCircleArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M368 232H197.1l67.21-62.41c9.719-9.062 10.25-24.22 1.25-33.94-9.031-9.688-24.22-10.25-33.94-1.25l-112 104c-4.82 3.7-7.62 10.9-7.62 17.6s2.781 13.03 7.656 17.59l112 104c9.719 9 24.91 8.438 33.94-1.25 9-9.719 8.469-24.88-1.25-33.94L197.1 280H368c13.25 0 24-10.75 24-24s-10.7-24-24-24zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208z" />
  </svg>
);

export default SvgCircleArrowLeft;