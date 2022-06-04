import * as React from "react";
import { SVGProps } from "react";

const SvgCircleE = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M344 144c4.4 0 8-3.6 8-8s-3.6-8-8-8H168c-4.4 0-8 3.6-8 8v240c0 4.4 3.6 8 8 8h176c4.422 0 8-3.578 8-8s-3.578-8-8-8H176V264h120c4.422 0 8-3.578 8-8s-3.578-8-8-8H176V144h168zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 496C123.7 496 16 388.3 16 256S123.7 16 256 16s240 107.7 240 240-107.7 240-240 240z" />
  </svg>
);

export default SvgCircleE;
