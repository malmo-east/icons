import * as React from "react";
import { SVGProps } from "react";

const SvgCircleEnvelope = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 288c-2.9 0-4.9-.4-5.9-1.1L128 238v82c0 17.67 14.33 32 32 32h192c17.67 0 32-14.33 32-32v-82l-122.1 48.82c-1.9.78-3.9 1.18-5.9 1.18zm96-128H160c-17.7 0-32 14.3-32 32v11.57l128 51.2 128-51.2V192c0-17.7-14.3-32-32-32zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208z" />
  </svg>
);

export default SvgCircleEnvelope;