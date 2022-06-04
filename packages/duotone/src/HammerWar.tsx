import * as React from "react";
import { SVGProps } from "react";

const SvgHammerWar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="hammer-war_svg__fa-primary"
      d="M384 64v192c0 19.75-17.75 34.75-37.25 31.5l-154.8-25.75-154.7 25.75C17.75 290.8 0 275.8 0 256V64c0-19.75 17.75-34.75 37.25-31.5l154.8 25.75 154.7-25.75C366.3 29.25 384 44.25 384 64z"
    />
    <path
      d="M224 267.1V496c0 8.836-7.164 16-16 16h-32c-8.836 0-16-7.164-16-16V267.1l31.1-5.324L224 267.1zM192 58.25l31.1-5.35V16c0-8.836-7.164-16-16-16h-32c-8.836 0-16 7.164-16 16v36.9l32.9 5.35z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgHammerWar;
