import * as React from "react";
import { SVGProps } from "react";

const SvgPesetaSign = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M192 32c79.5 0 144 64.47 144 144h40c4.4 0 8 3.6 8 8s-3.6 8-8 8h-40.9c-7.9 71.1-69 128-143.1 128H64v152c0 4.4-3.58 8-8 8s-8-3.6-8-8V192H8c-4.418 0-8-3.6-8-8s3.582-8 8-8h40V63.31C48 46.02 62.02 32 79.31 32H192zm128 144c0-70.7-57.3-128-128-128H79.31C70.86 48 64 54.86 64 63.31V176h256zM64 192v112h128c65.3 0 119.1-48.9 127-112H64z" />
  </svg>
);

export default SvgPesetaSign;
