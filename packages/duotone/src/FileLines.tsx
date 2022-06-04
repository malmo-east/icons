import * as React from "react";
import { SVGProps } from "react";

const SvgFileLines = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="file-lines_svg__fa-primary"
      d="M256 0v128h128L256 0zm16 384H112c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.836 0 16-7.164 16-16s-7.2-16-16-16zm0-64H112c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.836 0 16-7.164 16-16s-7.2-16-16-16zm0-64H112c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
    />
    <path
      d="M256 128V0H48C21.49 0 0 21.49 0 48v416c0 26.5 21.49 48 48 48h288c26.51 0 48-21.49 48-48V128H256zm16 288H112c-8.8 0-16-7.2-16-16s7.2-16 16-16h160c8.836 0 16 7.164 16 16s-7.2 16-16 16zm0-64H112c-8.8 0-16-7.2-16-16s7.2-16 16-16h160c8.836 0 16 7.164 16 16s-7.2 16-16 16zm0-64H112c-8.8 0-16-7.2-16-16s7.2-16 16-16h160c8.8 0 16 7.2 16 16s-7.2 16-16 16z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgFileLines;
