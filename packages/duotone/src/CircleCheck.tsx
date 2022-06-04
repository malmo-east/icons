import * as React from "react";
import { SVGProps } from "react";

const SvgCircleCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="circle-check_svg__fa-primary"
      d="M371.8 172.2c10.9 10.9 10.9 28.7 0 39.6l-128 128c-10.9 10.9-28.7 10.9-39.6 0l-64-64c-10.9-10.9-10.9-28.7 0-39.6 10.9-10.9 28.7-10.9 39.6 0l44.2 44.2 108.2-108.2c10.9-10.9 28.7-10.9 39.6 0z"
    />
    <path
      d="M0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm371.8-44.2c10.9-10.9 10.9-28.7 0-39.6-10.9-10.9-28.7-10.9-39.6 0L224 280.4l-44.2-44.2c-10.9-10.9-28.7-10.9-39.6 0-10.9 10.9-10.9 28.7 0 39.6l64 64c10.9 10.9 28.7 10.9 39.6 0l128-128z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCircleCheck;
