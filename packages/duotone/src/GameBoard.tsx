import * as React from "react";
import { SVGProps } from "react";

const SvgGameBoard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="game-board_svg__fa-primary"
      d="M64 256v80h80v-80H64zm320 160v-80h-80v80h80zm-240 0h80v-80h-80v80zM64 96v80h80V96H64zm160 80h-80v80h80v-80zm0 80v80h80v-80h-80zm160 0v-80h-80v80h80zM304 96h-80v80h80V96z"
    />
    <path
      d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm0 384H64V96h319.1l.9 320z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgGameBoard;
