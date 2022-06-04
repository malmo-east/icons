import * as React from "react";
import { SVGProps } from "react";

const SvgEnvelope = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="envelope_svg__fa-primary"
      d="M464 64c26.5 0 48 21.49 48 48 0 15.1-7.1 29.3-19.2 38.4L275.2 313.6a32.1 32.1 0 0 1-38.4 0L19.2 150.4C7.113 141.3 0 127.1 0 112c0-26.51 21.49-48 48-48h416z"
    />
    <path
      d="m19.2 150.4 217.6 163.2c11.4 8.5 27 8.5 38.4 0l217.6-163.2c12.1-9.1 19.2-23.3 19.2-38.4v272c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V112c0 15.1 7.113 29.3 19.2 38.4z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgEnvelope;
