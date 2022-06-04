import * as React from "react";
import { SVGProps } from "react";

const SvgChessPawnPiece = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" {...props}>
    <path
      className="chess-pawn-piece_svg__fa-primary"
      d="M64 288.1h14.88c-2 32.35-7 64.49-14.88 95.96h128c-7.875-31.47-12.88-63.61-14.88-95.96H192c8.875 0 16-7.126 16-15.99V256.1c0-8.867-7.125-16.03-16-16.03h-16.48c20.87-15.34 32.48-39.28 32.48-64.11C208 116 153.9 96 127.1 96c-25.2 0-80 20.6-80 79.1 0 24.83 11.61 48.77 32.48 64.11H64c-8.875 0-16 7.167-16 16.03v15.99c0 8.87 7.12 16.87 16 16.87z"
    />
    <path
      d="M256 473.9v22.13c0 8.87-7.1 15.97-16 15.97H16c-8.875 0-16-7.1-16-16v-22.13c0-5.995 3.375-11.62 8.875-14.24L32 448v-47.93c0-8.867 7.125-15.99 16-15.99h160c8.875 0 16 7.119 16 15.99V448l23.12 11.62c5.48 2.68 8.88 8.28 8.88 14.28z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgChessPawnPiece;
