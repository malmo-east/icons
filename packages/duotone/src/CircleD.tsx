import * as React from "react";
import { SVGProps } from "react";

const SvgCircleD = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="circle-d_svg__fa-primary"
      d="M254.4 128H184c-13.2 0-24 10.8-24 24v208c0 13.3 10.8 24 24 24h70.41C325.9 384 384 326.6 384 256s-58.1-128-129.6-128zm0 208H208V176h46.41c44.99 0 81.59 35.9 81.59 80s-36.6 80-81.6 80z"
    />
    <path
      d="M254.4 176H208v160h46.41c44.99 0 81.59-35.9 81.59-80s-36.6-80-81.6-80zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm-1.6 384H184c-13.2 0-24-10.7-24-24V152c0-13.2 10.8-24 24-24h70.41C325.9 128 384 185.4 384 256s-58.1 128-129.6 128z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCircleD;
