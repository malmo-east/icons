import * as React from "react";
import { SVGProps } from "react";

const SvgFaceFlushed = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="face-flushed_svg__fa-primary"
      d="M136 224c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24zm192 0c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24z"
    />
    <path
      d="M0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm192 112c-8.8 0-16 7.2-16 16s7.2 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16H192zm-32-216c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm192 144c39.8 0 72-32.2 72-72s-32.2-72-72-72-72 32.2-72 72 32.2 72 72 72z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgFaceFlushed;
