import * as React from "react";
import { SVGProps } from "react";

const SvgNeuter = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="neuter_svg__fa-primary"
      d="M368 176C368 78.8 289.2 0 192 0S16 78.8 16 176c0 86.26 62.1 157.9 144 172.1V496c0 8.8 7.2 16 16 16h32c8.838 0 16-7.164 16-16V349c81.9-15.1 144-86.7 144-173zm-176 96c-52.93 0-96-43.07-96-96 0-52.94 43.07-95.1 96-95.1 52.94 0 96 43.06 96 95.1 0 52.9-43.1 96-96 96z"
    />
    <path
      d="M256 176c0 35.29-28.71 64-64 64s-64-28.71-64-64 28.71-64 64-64c35.3 0 64 28.7 64 64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgNeuter;
