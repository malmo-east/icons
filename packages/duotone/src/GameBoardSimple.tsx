import * as React from "react";
import { SVGProps } from "react";

const SvgGameBoardSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="game-board-simple_svg__fa-primary"
      d="M64 96v160h160V96H64zm160 160v160h160V256H224z"
    />
    <path
      d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm0 384H64V96h319.1l.9 320z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgGameBoardSimple;
