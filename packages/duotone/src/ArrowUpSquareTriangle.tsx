import * as React from "react";
import { SVGProps } from "react";

const SvgArrowUpSquareTriangle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="arrow-up-square-triangle_svg__fa-primary"
      d="M239.6 138c11.94 13.05 11.06 33.31-1.969 45.27C224 195.8 203.8 193.8 192.4 181.3L160 145.9v302c0 17.8-14.3 32.1-32 32.1s-32-14.33-32-32.03V145.9l-32.4 35.4c-11.96 13-32.21 14-45.22 2-13.032-11.9-13.907-32.2-1.97-45.3l87.1-96.09c12.12-13.26 35.06-13.26 47.19 0L239.6 138z"
    />
    <path
      d="M320 224h128c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32H320c-17.67 0-31.1 14.33-31.1 32v128c-.9 17.7 13.4 32 31.1 32zm172.1 214.9-83.13-137.1c-11.12-18.38-38.75-18.38-49.88 0l-83.25 137.1c-11 18.25 2.75 41.13 25 41.13h166.3c22.26-.03 35.96-22.93 24.96-41.13z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgArrowUpSquareTriangle;
