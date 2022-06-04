import * as React from "react";
import { SVGProps } from "react";

const SvgChessPawn = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path
      className="chess-pawn_svg__fa-primary"
      d="M105.1 224H80c-8.88 0-16 7.1-16 16v32c0 8.875 7.125 15.1 16 15.1l16 .9v5.5c0 44-4.12 86.6-24 122.5h176c-19.9-35.9-24-78.5-24-122.5V288h16c8.875 0 16-7.125 16-15.1v-32c0-9.8-7.1-16.9-16-16.9h-25.12C244.3 205.6 264 173.2 264 136c0-57.5-46.5-104-104.9-104S56 78.5 56 136c0 37.2 19.74 69.6 49.1 88z"
    />
    <path
      d="M320 496c0 8.836-7.164 16-16 16H16c-8.836 0-16-7.2-16-16.9 0-20.87 13.4-38.45 32-45.06V432c0-8.8 7.16-16 16-16h224c8.836 0 16 7.162 16 16v18.94c18.6 6.56 32 24.16 32 45.06z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgChessPawn;
