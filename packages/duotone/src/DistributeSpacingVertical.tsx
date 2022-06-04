import * as React from "react";
import { SVGProps } from "react";

const SvgDistributeSpacingVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="distribute-spacing-vertical_svg__fa-primary"
      d="M488 32c13.3 0 24 10.75 24 24s-10.7 24-24 24H24C10.75 80 0 69.25 0 56s10.75-24 24-24h464zm0 400c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.25 0-24-10.7-24-24s10.75-24 24-24h464z"
    />
    <path
      d="M96 208c0-26.5 21.5-48 48-48h224c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H144c-26.5 0-48-21.5-48-48v-96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgDistributeSpacingVertical;
