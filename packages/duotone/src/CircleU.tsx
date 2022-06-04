import * as React from "react";
import { SVGProps } from "react";

const SvgCircleU = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="circle-u_svg__fa-primary"
      d="M344 144c-13.2 0-24 10.8-24 24v122.9c0 33.7-28.7 61.1-64 61.1s-64-27.41-64-61.09V168c0-13.2-10.7-24-24-24s-24 10.8-24 24v122.9c0 60.2 50.3 109.1 112 109.1s112-48.94 112-109.1V168c0-13.2-10.7-24-24-24z"
    />
    <path
      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm112 290.9c0 60.2-50.2 109.1-112 109.1s-112-48.94-112-109.1V168c0-13.25 10.75-24 24-24s24 10.8 24 24v122.9c0 33.7 28.7 61.1 64 61.1s64-27.41 64-61.09V168c0-13.25 10.75-24 24-24s24 10.75 24 24v122.9z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCircleU;
