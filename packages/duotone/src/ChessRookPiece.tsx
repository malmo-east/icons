import * as React from "react";
import { SVGProps } from "react";

const SvgChessRookPiece = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path
      className="chess-rook-piece_svg__fa-primary"
      d="M280 64h-35.13c-4.5 0-8 3.625-8 8v40h-33V72c0-4.375-3.625-8-8-8H124.1c-4.375 0-8 3.625-8 8v40H83.25V72c0-4.375-3.625-8-8-8H40c-4.37 0-8 3.63-8 8v84.88c0 8.42 3.25 16.42 9.25 22.42l30.5 31.13L57.38 384h205.3L248.3 210.2l30.5-31c6-5.9 9.2-14.1 9.2-22.4V72c0-4.37-3.6-8-8-8zm-96.4 214.8h-47.2v-47.2c0-13.1 10.6-23.6 23.6-23.6s23.62 10.5 23.62 23.62v47.18z"
    />
    <path
      d="M311.1 459.6 288 448v-48c0-8.875-7.125-16-16-16H48c-8.88 0-16 7.1-16 16v48L8.88 459.62C3.375 462.2 0 467.9 0 473.9V496c0 8.9 7.125 16 16 16h288c8.875 0 16-7.125 16-16v-22.12c0-5.98-3.4-11.68-8.9-14.28z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgChessRookPiece;
