import * as React from "react";
import { SVGProps } from "react";

const SvgChildRifle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="child-rifle_svg__fa-primary"
      d="M416 0c8.8 0 16 7.164 16 16v116.3c9.6 5.5 16 15.9 16 27.7v109.3l16-5.3v-56c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v84.5c0 6.9-4.4 13-10.9 15.1L448 325.3V352h48c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16h-44l23 92.1c2.6 10.1-5.1 19.9-15.5 19.9H400c-8.8 0-16-7.2-16-16v-96h-16c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32v-32c0-11.8 6.4-22.2 16-27.7V32c-8.8 0-16-7.16-16-16 0-8.836 7.2-16 16-16h32z"
    />
    <path
      d="M208 64c0 35.35-28.7 64-64 64S80 99.35 80 64s28.7-64 64-64 64 28.65 64 64zm-72 288v128c0 17.7-14.3 32-32 32-17.67 0-32-14.3-32-32V300.5L59.09 321c-9.42 15-29.18 19.5-44.13 10.1-14.96-9.4-19.452-29.2-10.037-45L56.6 204.9c17.57-28 48.3-45.8 81.2-45.8h12.4c33 0 63.6 17.8 81.2 45.8l51.7 81.2c9.4 15.8 4.9 35.6-10.1 45-14.9 9.4-34.7 4.9-44.1-10.1L216 300.5V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352h-16z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgChildRifle;