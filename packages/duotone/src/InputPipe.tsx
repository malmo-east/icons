import * as React from "react";
import { SVGProps } from "react";

const SvgInputPipe = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="input-pipe_svg__fa-primary"
      d="M104 184c0-13.3 10.7-24 24-24s24 10.7 24 24v144c0 13.3-10.7 24-24 24s-24-10.7-24-24V184z"
    />
    <path
      d="M576 64c35.3 0 64 28.65 64 64v256c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h512zm0 64H64v256h512V128z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgInputPipe;
