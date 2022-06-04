import * as React from "react";
import { SVGProps } from "react";

const SvgCircleArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M261.7 130.3c-1.6-1.5-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3a7.994 7.994 0 0 0 0 11.31L356.7 248H136c-4.4 0-8 3.6-8 8s3.594 8 8 8h220.7L250.4 370.3c-3.125 3.125-3.125 8.188 0 11.31s8.188 3.125 11.31 0l120-120a7.994 7.994 0 0 0 0-11.31l-120.01-120zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 496C123.7 496 16 388.3 16 256S123.7 16 256 16s240 107.7 240 240-107.7 240-240 240z" />
  </svg>
);

export default SvgCircleArrowRight;
