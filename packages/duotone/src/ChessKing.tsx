import * as React from "react";
import { SVGProps } from "react";

const SvgChessKing = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="chess-king_svg__fa-primary"
      d="M416.1 160h-160v-48h16.01c17.6 0 31.98-14.4 31.98-32-.99-17.6-14.49-32-32.09-32h-16.01V32C256 14.4 241.6 0 223.1 0c-16.7 0-32 14.4-32 32.01V48h-16c-17.6 0-32.01 14.4-32.01 32 .01 17.6 15.31 32 32.01 32h16.01v48h-160C17.34 160 0 171.5 0 192c0 3.2.473 6.4 1.437 9.5L74.46 416h299.1l73.02-214.5c.92-3.1 1.42-6.3 1.42-9.5 0-20.4-17.9-32-31.9-32z"
    />
    <path
      d="M416 496c0 8.836-7.164 16-16 16H47.96c-8.838 0-16-7.164-16-16 0-20.89 13.42-38.48 32.06-45.08V432c0-8.838 7.166-16 16-16h288.1c8.838 0 16 7.162 16 16v18.96C402.7 457.6 416 475.2 416 496z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgChessKing;
