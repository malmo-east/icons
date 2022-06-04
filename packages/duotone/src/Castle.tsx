import * as React from "react";
import { SVGProps } from "react";

const SvgCastle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="castle_svg__fa-primary"
      d="M0 176c0-8.8 7.164-16 16-16h32c8.84 0 16 7.2 16 16v48h512v-48c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v288c0 26.5-21.5 48-48 48H384V384c0-35.3-28.7-64-64-64s-64 28.7-64 64v128H48c-26.51 0-48-21.5-48-48V176z"
    />
    <path
      d="M128 16c0-8.836 7.2-16 16-16h32c8.8 0 16 7.164 16 16v48h48V16c0-8.836 7.2-16 16-16h32c8.8 0 16 7.164 16 16v48h32V16c0-8.836 7.2-16 16-16h32c8.8 0 16 7.164 16 16v48h48V16c0-8.836 7.2-16 16-16h32c8.8 0 16 7.164 16 16v208H128V16z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCastle;
