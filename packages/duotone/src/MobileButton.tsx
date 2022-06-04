import * as React from "react";
import { SVGProps } from "react";

const SvgMobileButton = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="mobile-button_svg__fa-primary"
      d="M352 48v336H32V48C32 21.49 53.49 0 80 0h224c26.5 0 48 21.49 48 48z"
    />
    <path
      d="M32 384v80c0 26.5 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-80H32zm160 96c-17.75 0-32-14.25-32-32s14.25-32 32-32 32 14.25 32 32-14.2 32-32 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgMobileButton;
