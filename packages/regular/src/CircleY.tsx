import * as React from "react";
import { SVGProps } from "react";

const SvgCircleY = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208zm85.8-311.6L256 252.5l-85.8-100.1c-8.6-10.1-23.7-11.2-33.8-2.6-10.1 8.6-11.2 23.8-2.6 33.8L232 298.2V376c0 13.25 10.75 24 24 24s24-10.75 24-24v-77.8l98.22-114.6c8.625-10.06 7.469-25.22-2.594-33.84-10.126-8.66-25.226-7.46-33.826 2.64z" />
  </svg>
);

export default SvgCircleY;