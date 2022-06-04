import * as React from "react";
import { SVGProps } from "react";

const SvgFileMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="file-minus_svg__fa-primary"
      d="M256 0v128h128L256 0zm16 312H111.1C98.74 312 88 322.7 88 336c0 13.26 10.73 23.1 23.1 23.1H272c13.26 0 24-10.74 24-23.1s-10.7-24-24-24z"
    />
    <path
      d="M256 128V0H48C21.49 0 0 21.49 0 48v416c0 26.5 21.49 48 48 48h288c26.51 0 48-21.49 48-48V128H256zm16 231.1H111.1c-12.37 0-23.1-9.8-23.1-23.1 0-13.26 10.74-23.1 23.1-23.1H272c13.26 0 24 10.74 24 23.1s-10.7 23.1-24 23.1z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgFileMinus;
