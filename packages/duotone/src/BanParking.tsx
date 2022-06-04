import * as React from "react";
import { SVGProps } from "react";

const SvgBanParking = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="ban-parking_svg__fa-primary"
      d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM99.5 144.8C77.15 176.1 64 214.5 64 256c0 106 85.1 192 192 192 41.5 0 79.9-13.1 111.2-35.5L99.5 144.8zM448 256c0-106.9-86-192-192-192-41.5 0-79.9 13.15-111.2 35.5l267.7 267.7C434.9 335.9 448 297.5 448 256z"
    />
    <path
      d="M296.6 251.4c9.2-5.7 15.4-15.8 15.4-27.4 0-17.7-14.3-32-32-32h-42.7l-54.8-54.8c6.9-5.7 15.8-9.2 25.5-9.2h72c53 0 96 42.1 96 96 0 29.2-13.1 55.4-33.7 73l-45.7-45.6zM168 261.3l64 64V352c0 17.7-14.3 32-32 32s-32-14.3-32-32v-90.7z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBanParking;
