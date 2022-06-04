import * as React from "react";
import { SVGProps } from "react";

const SvgBowlingBall = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="bowling-ball_svg__fa-primary"
      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zM144 208c-17.7 0-32-14.25-32-32s14.3-32 32-32 32 14.25 32 32-14.3 32-32 32zm96-128c17.66 0 31.95 14.25 31.95 32s-14.29 32-31.95 32-32.05-14.25-32.05-32S222.4 80 240 80zm0 160c-17.7 0-32-14.25-32-32s14.3-32 32-32 32 14.25 32 32-14.3 32-32 32z"
    />
    <path
      d="M144 144c-17.7 0-32 14.25-32 32s14.3 32 32 32 32-14.25 32-32-14.3-32-32-32zm96 0c17.66 0 31.95-14.25 31.95-32S257.66 80 240 80s-32.05 14.25-32.05 32 14.45 32 32.05 32zm0 32c-17.7 0-32 14.25-32 32s14.3 32 32 32 32-14.25 32-32-14.3-32-32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBowlingBall;
