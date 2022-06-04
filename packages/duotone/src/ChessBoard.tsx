import * as React from "react";
import { SVGProps } from "react";

const SvgChessBoard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="chess-board_svg__fa-primary"
      d="M64 160v64h64v-64H64zm192 256h64v-64h-64v64zM192 96h-64v64h64V96zm192 256v-64h-64v64h64zm-256 64h64v-64h-64v64zM64 288v64h64v-64H64zM320 96h-64v64h64V96zM192 288v64h64v-64h-64zm64-64v64h64v-64h-64zm0 0v-64h-64v64h64zm128 0v-64h-64v64h64zm-192 0h-64v64h64v-64z"
    />
    <path
      d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm0 384H64V96h320v320z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgChessBoard;
