import * as React from "react";
import { SVGProps } from "react";

const SvgCircleCaretUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M277.7 169.8c-5.5-6.2-13.4-9.8-21.7-9.8s-16.2 3.6-21.7 9.8l-89.6 102.4c-7.4 8.5-9.2 20.6-4.5 30.9 4.6 10.3 14.9 16.9 26.2 16.9h179.2c11.28 0 21.57-6.633 26.22-16.89 4.672-10.31 2.871-22.44-4.594-30.91L277.7 169.8zm79.6 126.7c-2.1 4.6-6.7 7.5-11.7 7.5H166.4a12.776 12.776 0 0 1-11.65-7.5c-2.05-4.6-1.35-10 2.05-13.7l89.6-102.4c2.4-2.8 5.9-4.4 9.6-4.4s7.199 1.602 9.625 4.375l89.6 102.4C358.6 286.5 359.3 291.9 357.3 296.5zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 496C123.7 496 16 388.3 16 256S123.7 16 256 16s240 107.7 240 240-107.7 240-240 240z" />
  </svg>
);

export default SvgCircleCaretUp;