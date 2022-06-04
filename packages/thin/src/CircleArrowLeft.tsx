import * as React from "react";
import { SVGProps } from "react";

const SvgCircleArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M376 248H155.3l106.3-106.3c3.125-3.125 3.125-8.188 0-11.31s-8.188-3.125-11.31 0l-120 120a7.994 7.994 0 0 0 0 11.31l120 120c1.61 1.5 3.61 2.3 5.71 2.3s4.094-.781 5.656-2.344a7.994 7.994 0 0 0 0-11.31L155.3 264H376c4.4 0 8-3.6 8-8s-3.6-8-8-8zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 496C123.7 496 16 388.3 16 256S123.7 16 256 16s240 107.7 240 240-107.7 240-240 240z" />
  </svg>
);

export default SvgCircleArrowLeft;
