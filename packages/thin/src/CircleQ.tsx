import * as React from "react";
import { SVGProps } from "react";

const SvgCircleQ = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 128c-70.6 0-128 57.4-128 128s57.41 128 128 128c32.41 0 61.7-12.49 84.27-32.41l30.07 30.07c1.56 1.54 3.56 2.34 5.66 2.34s4.094-.781 5.656-2.344a7.994 7.994 0 0 0 0-11.31l-30.07-30.07C371.5 317.7 384 288.4 384 256c0-70.6-57.4-128-128-128zm84.3 200.1-38.62-38.62c-3.125-3.125-8.188-3.125-11.31 0s-3.125 8.188 0 11.31l38.62 38.62C309.3 357.3 283.1 368 256 368c-61.75 0-112-50.25-112-112s50.3-112 112-112 112 50.25 112 112c0 27.1-10.7 53.3-27.7 72.1zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 496C123.7 496 16 388.3 16 256S123.7 16 256 16s240 107.7 240 240-107.7 240-240 240z" />
  </svg>
);

export default SvgCircleQ;