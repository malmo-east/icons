import * as React from "react";
import { SVGProps } from "react";

const SvgCodeCommit = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="code-commit_svg__fa-primary"
      d="M160 256c0-88.4 71.6-160 160-160s160 71.6 160 160-71.6 160-160 160-160-71.6-160-160zm160 80c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80z"
    />
    <path
      d="M476.8 288c2.1-10.3 3.2-21.9 3.2-32 0-11-1.1-21.7-3.2-32H608c17.7 0 32 14.3 32 32s-14.3 32-32 32H476.8zm-313.6 0H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h131.2c-2.1 10.3-3.2 21-3.2 32 0 10.1 1.1 21.7 3.2 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCodeCommit;
