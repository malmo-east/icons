import * as React from "react";
import { SVGProps } from "react";

const SvgCircleVideo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M284 176H164c-11.9 0-20 8.1-20 20v120c0 11.04 8.955 20 20 20h120c11.04 0 20-8.955 20-20V196c0-11.9-9-20-20-20zm95.8 18.3L336 224.5v62.96l43.84 30.2c8.46 5.84 20.16-.06 20.16-10.26V204.6c0-10.2-11.6-16.2-20.2-10.3zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208z" />
  </svg>
);

export default SvgCircleVideo;
