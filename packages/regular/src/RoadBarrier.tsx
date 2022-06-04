import * as React from "react";
import { SVGProps } from "react";

const SvgRoadBarrier = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M24 32c13.25 0 24 10.75 24 24v24h544V56c0-13.25 10.7-24 24-24s24 10.75 24 24v400c0 13.3-10.7 24-24 24s-24-10.7-24-24V304H48v152c0 13.3-10.75 24-24 24S0 469.3 0 456V56c0-13.25 10.75-24 24-24zm568 224V128h-21.2l-64 128H592zm-522.83 0 64.03-128H48v128h21.17zM389.2 128h-74.4l-64 128h74.4l64-128zm-10.4 128h74.4l64-128h-74.4l-64 128zm-256 0h74.4l64-128h-74.4l-64 128z" />
  </svg>
);

export default SvgRoadBarrier;