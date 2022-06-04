import * as React from "react";
import { SVGProps } from "react";

const SvgBowlingBall = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M240 176c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.3-32-32-32zm-96-32c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.3-32-32-32zm96-64c-17.67 0-32.05 14.33-32.05 32s14.37 32 32.05 32 31.95-14.33 31.95-32S257.7 80 240 80zm16-80C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208z" />
  </svg>
);

export default SvgBowlingBall;
