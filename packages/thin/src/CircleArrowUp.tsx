import * as React from "react";
import { SVGProps } from "react";

const SvgCircleArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M261.7 130.3a7.994 7.994 0 0 0-11.31 0l-120 120c-1.59 1.6-2.39 3.6-2.39 5.7s.781 4.094 2.344 5.656a7.994 7.994 0 0 0 11.31 0L248 155.3V376c0 4.4 3.6 8 8 8s8-3.594 8-8V155.3l106.3 106.3c3.125 3.125 8.188 3.125 11.31 0s3.125-8.188 0-11.31L261.7 130.3zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 496C123.7 496 16 388.3 16 256S123.7 16 256 16s240 107.7 240 240-107.7 240-240 240z" />
  </svg>
);

export default SvgCircleArrowUp;
