import * as React from "react";
import { SVGProps } from "react";

const SvgCartArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="cart-arrow-down_svg__fa-primary"
      d="M96 0c11.5 0 21.4 8.19 23.6 19.51L179.9 336H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H159.1c-10.6 0-20.5-8.2-22.7-19.5L76.14 48H24C10.75 48 0 37.25 0 24S10.75 0 24 0h72zm32 464c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48-48-21.5-48-48zm384 0c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zM383 119c9.4-9.3 24.6-9.3 33.1 0 10.2 9.4 10.2 24.6 0 33.1l-64 64c-8.5 10.2-23.7 10.2-33.1 0l-64-64c-9.3-8.5-9.3-23.7 0-33.1 9.4-9.3 24.6-9.3 33.1 0l23.9 23.1V32h48v110.1l23-23.1z"
    />
    <path
      d="m311.1 142.1-23-23.1c-8.5-9.3-23.7-9.3-33.1 0-9.3 9.4-9.3 24.6 0 33.1l64 64c9.4 10.2 24.6 10.2 33.1 0l64-64c10.2-8.5 10.2-23.7 0-33.1-8.5-9.3-23.7-9.3-33.1 0l-23.9 23.1V32h182.7c20.3 0 36.5 20.25 30.8 40.66l-54 192.04c-3.9 13.8-16.5 23.3-30.8 23.3H170.7L121.1 32h190v110.1z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCartArrowDown;
