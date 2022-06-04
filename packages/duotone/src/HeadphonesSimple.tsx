import * as React from "react";
import { SVGProps } from "react";

const SvgHeadphonesSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="headphones-simple_svg__fa-primary"
      d="M160 288h-16c-35.34 0-64 28.7-64 64.13v63.75C80 451.3 108.7 480 144 480h16c17.66 0 32-14.34 32-32.05v-127.9c0-17.75-14.3-32.05-32-32.05zm208 0h-16c-17.66 0-32 14.32-32 32.04v127.9c0 17.7 14.34 32.05 32 32.05l16 .01c35.34 0 64-28.7 64-64.13v-63.75c0-35.42-28.7-64.12-64-64.12z"
    />
    <path
      d="M256 32C112.9 32 4.563 151.1 0 288v104c0 13.3 10.75 24 23.1 24S48 405.3 48 392V288c0-114.7 93.34-207.8 208-207.8 114.7 0 208 93.1 208 207.8v104c0 13.3 10.7 24 24 24s24-10.7 24-24V287.1C507.4 151.1 399.1 32 256 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgHeadphonesSimple;
