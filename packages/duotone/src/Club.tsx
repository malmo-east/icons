import * as React from "react";
import { SVGProps } from "react";

const SvgClub = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="club_svg__fa-primary"
      d="M256 224c17.7 0 32 14.3 32 32v192h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32h32V256c0-17.7 14.3-32 32-32z"
    />
    <path
      d="M288 372.7V256c0-17.7-14.3-32-32-32s-32 14.3-32 32v116.7c-23.5 26.5-57.8 43.3-96 43.3C57.31 416 0 358.7 0 288s57.31-128 128-128c1.4 0 2.7 0 4 .1-2.6-10.3-4-21-4-32.1C128 57.31 185.3 0 256 0s128 57.31 128 128c0 11.1-1.4 21.8-4.9 32.1 2.2-.1 3.5-.1 4.9-.1 70.7 0 128 57.3 128 128s-57.3 128-128 128c-38.2 0-72.5-16.8-96-43.3z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgClub;