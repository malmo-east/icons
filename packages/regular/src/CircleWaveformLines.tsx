import * as React from "react";
import { SVGProps } from "react";

const SvgCircleWaveformLines = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M232 128c-13.2 0-24 10.8-24 24v208c0 13.2 10.8 24 24 24s24-10.8 24-24V152c0-13.2-10.8-24-24-24zm-80 64c-13.2 0-24 10.8-24 24v80c0 13.2 10.8 24 24 24s24-10.8 24-24v-80c0-13.2-10.8-24-24-24zm240 24c-13.22 0-24 10.78-24 24v32c0 13.22 10.78 24 24 24s24-10.8 24-24v-32c0-13.2-10.8-24-24-24zm-80-40c-13.2 0-24 10.8-24 24v112c0 13.22 10.78 24 24 24s24-10.78 24-24V200c0-13.2-10.8-24-24-24zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208z" />
  </svg>
);

export default SvgCircleWaveformLines;