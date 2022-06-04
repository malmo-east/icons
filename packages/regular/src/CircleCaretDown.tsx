import * as React from "react";
import { SVGProps } from "react";

const SvgCircleCaretDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M352 208H160c-9.531 0-18.16 5.656-22 14.38-3.8 8.72-2.1 18.92 4.4 25.92l96 104c4.5 4.9 10.9 7.7 17.6 7.7s13.09-2.812 17.62-7.719l96-104c6.469-7 8.188-17.19 4.375-25.91C370.2 213.7 361.5 208 352 208zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208z" />
  </svg>
);

export default SvgCircleCaretDown;