import * as React from "react";
import { SVGProps } from "react";

const SvgChessBoard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M192 224h-64v64h64v-64zM384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm0 128h-64v64h64v64h-64v64h64v64h-64v-64h-64v64h-64v-64h-64v64H64v-64h64v-64H64v-64h64v-64H64V96h64v64h64V96h64v64h64V96h64v64zM192 288v64h64v-64h-64zm64-64v-64h-64v64h64zm0 64h64v-64h-64v64z" />
  </svg>
);

export default SvgChessBoard;
