import * as React from "react";
import { SVGProps } from "react";

const SvgCircleChevronLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M304 143.1c0-1.969-.719-3.906-2.156-5.469-3.016-3.219-8.078-3.406-11.3-.375l-120 112c-3.25 3-3.25 8.688 0 11.69l120 112c3.219 3.031 8.281 2.844 11.3-.375 3-3.25 2.859-8.281-.39-11.31L187.7 255.1l113.7-106.2c1.7-.6 2.6-2.8 2.6-5.8zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 496C123.7 496 16 388.3 16 256S123.7 16 256 16s240 107.7 240 240-107.7 240-240 240z" />
  </svg>
);

export default SvgCircleChevronLeft;
