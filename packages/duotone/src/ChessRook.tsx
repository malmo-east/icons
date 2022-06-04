import * as React from "react";
import { SVGProps } from "react";

const SvgChessRook = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="chess-rook_svg__fa-primary"
      d="M368 32h-56c-8.875 0-16 7.125-16 16v48h-48V48c0-8.875-7.125-16-16-16h-80c-8.875 0-16 7.125-16 16v48H88.12V48c0-8.875-7.25-16-16-16H16C7.125 32 0 39.12 0 48v176l64 32c0 48.38-1.5 95-13.25 160h282.5C321.5 351 320 303.8 320 256l64-32V48c0-8.88-7.1-16-16-16zM224 320h-64v-64c0-17.62 14.38-32 32-32s32 14.38 32 32v64z"
    />
    <path
      d="M384 496c0 8.836-7.164 16-16 16H16c-8.836 0-16-7.2-16-16.9 0-20.87 13.4-38.45 32-45.06V432c0-8.8 7.16-16 16-16h288c8.836 0 16 7.162 16 16v18.94c18.6 6.56 32 24.16 32 45.06z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgChessRook;
