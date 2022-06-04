import * as React from "react";
import { SVGProps } from "react";

const SvgCircleDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M344 240h-56l-.9-88c0-13.25-10.75-24-24-24h-16c-12.4 0-24 10.8-24 24l.9 88h-56c-9.531 0-18.16 5.656-22 14.38-3.8 8.72-2.1 18.92 4.4 25.92l88.75 96c4.55 4.9 10.95 7.7 17.65 7.7 7.781-.313 13.25-2.875 17.75-7.844l87.25-96c6.406-7.031 8.031-17.19 4.188-25.88S353.5 240 344 240zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208z" />
  </svg>
);

export default SvgCircleDown;