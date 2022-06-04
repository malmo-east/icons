import * as React from "react";
import { SVGProps } from "react";

const SvgCircleChevronUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M261.9 170.5c-3-3.25-8.688-3.25-11.69 0l-112 120c-3.11 3.3-2.91 8.3.29 11.3 3.25 3 8.281 2.859 11.31-.39l106.2-113.7 106.2 113.7c1.49 1.69 3.69 2.59 5.79 2.59 1.969 0 3.906-.719 5.469-2.156 3.219-3.016 3.406-8.078.375-11.3L261.9 170.5zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 496C123.7 496 16 388.3 16 256S123.7 16 256 16s240 107.7 240 240-107.7 240-240 240z" />
  </svg>
);

export default SvgCircleChevronUp;
