import * as React from "react";
import { SVGProps } from "react";

const SvgCircleV = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M368.8 148.4 256 374.1 143.2 148.4c-2-3.9-6.8-5.5-10.8-3.6-3.9 2-5.5 6.8-3.6 10.8l120 240c1.4 2.7 3.3 4.4 7.2 4.4s5.797-1.719 7.156-4.422l120-240a8.002 8.002 0 0 0-3.578-10.73C375.6 142.9 370.8 144.5 368.8 148.4zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 496C123.7 496 16 388.3 16 256S123.7 16 256 16s240 107.7 240 240-107.7 240-240 240z" />
  </svg>
);

export default SvgCircleV;
