import * as React from "react";
import { SVGProps } from "react";

const SvgCircleChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M221.5 138.2c-3.3-3.1-8.3-2.9-11.3.3-3 3.25-2.859 8.281.39 11.31l113.7 106.2-113.7 106.2C208.9 363.7 208 365.9 208 368c0 1.969.719 3.906 2.156 5.469 3.016 3.219 8.078 3.406 11.3.375l120-112c3.25-3 3.25-8.688 0-11.69L221.5 138.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 496C123.7 496 16 388.3 16 256S123.7 16 256 16s240 107.7 240 240-107.7 240-240 240z" />
  </svg>
);

export default SvgCircleChevronRight;
