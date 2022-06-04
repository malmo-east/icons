import * as React from "react";
import { SVGProps } from "react";

const SvgSteeringWheel = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="steering-wheel_svg__fa-primary"
      d="M0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm256 192c106 0 192-86 192-192 0-106.9-86-192-192-192-106.9 0-192 85.1-192 192 0 106 85.1 192 192 192z"
    />
    <path
      d="M288 445.3c-10.4 1.8-21.1 2.7-32 2.7-10.9 0-21.6-.9-32-2.7v-86.4L168.9 288H66.65C64.91 277.6 64 266.9 64 256c0-10.9.91-21.6 2.65-32H160l7.2-14.3c5.4-10.9 16.5-17.7 28.6-17.7h120.4c12.1 0 23.2 6.8 28.6 17.7L352 224h93.3c1.8 10.4 2.7 21.1 2.7 32 0 10.9-.9 21.6-2.7 32H343.1L288 358.9v86.4z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSteeringWheel;
