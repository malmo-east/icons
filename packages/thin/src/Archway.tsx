import * as React from "react";
import { SVGProps } from "react";

const SvgArchway = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M408 144c4.4 0 8 3.6 8 8s-3.6 8-8 8H104c-4.42 0-8-3.6-8-8s3.58-8 8-8h304zM0 40a8 8 0 0 1 8-8h496c4.4 0 8 3.58 8 8s-3.6 8-8 8h-24v416h24c4.4 0 8 3.6 8 8s-3.6 8-8 8H352V352c0-53.9-43-96-96-96-53.9 0-96 42.1-96 96v128H8c-4.418 0-8-3.6-8-8s3.582-8 8-8h24V48H8a8 8 0 0 1-8-8zm48 424h96V352c0-61.9 50.1-112 112-112s112 50.1 112 112v112h96V48H48v416z" />
  </svg>
);

export default SvgArchway;
