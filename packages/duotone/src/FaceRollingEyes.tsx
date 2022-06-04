import * as React from "react";
import { SVGProps } from "react";

const SvgFaceRollingEyes = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="face-rolling-eyes_svg__fa-primary"
      d="M195.6 180.4c0 19.7-16 34.7-35.6 34.7s-35.6-15-35.6-34.7c0-3 .4-6 1.1-8.8 9.6-7.3 21.6-11.6 34.5-11.6 12.9 0 24.9 4.3 34.5 11.6.7 2.8 1.1 5.8 1.1 8.8zM384 184c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-6.9 2.2-13.2 5.8-18.4 8-4.5 16.9-5.6 26.2-5.6s18.2 1.1 26.2 5.6c3.6 5.2 5.8 11.5 5.8 18.4z"
    />
    <path
      d="M0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm192 112c-8.8 0-16 7.2-16 16s7.2 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16H192zm-32-208c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64zm192 128c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgFaceRollingEyes;
