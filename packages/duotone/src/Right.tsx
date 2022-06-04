import * as React from "react";
import { SVGProps } from "react";

const SvgRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="right_svg__fa-primary"
      d="M448 256c0 8.188-3.125 16.38-9.375 22.62l-160 160a32.003 32.003 0 0 1-34.88 6.938C231.8 440.6 224 428.9 224 416V96a32 32 0 0 1 54.63-22.622l160 160C444.9 239.6 448 247.8 448 256z"
    />
    <path
      d="M224 320H32c-17.67 0-32-14.33-32-32v-64c0-17.67 14.33-32 32-32h192v128z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgRight;
