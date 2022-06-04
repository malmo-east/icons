import * as React from "react";
import { SVGProps } from "react";

const SvgCircleArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M342.4 247.7 280 314.9V144c0-13.25-10.75-24-24-24s-24 10.8-24 24v170.9l-62.4-67.2c-9.1-9.8-24.2-10.3-33.9-1.3-10.6 9-10.3 24.2-1.3 33.9l104 112c3.7 4.9 10.9 7.7 17.6 7.7s13.03-2.781 17.59-7.656l104-112c9-9.719 8.438-24.91-1.25-33.94a23.966 23.966 0 0 0-33.94 1.296zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208z" />
  </svg>
);

export default SvgCircleArrowDown;