import * as React from "react";
import { SVGProps } from "react";

const SvgCircleQuarters = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="circle-quarters_svg__fa-primary"
      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 448c-106 0-192-85.96-192-192 0-106 85.96-192 192-192 106 0 192 85.96 192 192 0 106-86 192-192 192z"
    />
    <path
      d="M120.2 391.8C154.1 426.5 202.1 448 256 448s101-21.49 135.8-56.24L256 256 120.2 391.8zM256 64c-53.9 0-101.9 21.49-135.8 56.2L256 256l135.8-135.8C357 85.49 309 64 256 64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCircleQuarters;
