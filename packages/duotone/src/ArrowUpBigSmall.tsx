import * as React from "react";
import { SVGProps } from "react";

const SvgArrowUpBigSmall = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="arrow-up-big-small_svg__fa-primary"
      d="M239.6 138c11.94 13.05 11.06 33.31-1.969 45.27a31.891 31.891 0 0 1-21.61 8.414c-8.672 0-17.3-3.504-23.61-10.39L160 145.9v302c0 17.8-14.3 32.1-32 32.1s-32-14.33-32-32.03V145.9l-32.4 35.4c-11.96 13-32.21 14-45.22 2-13.032-11.9-13.907-32.2-1.97-45.3l87.1-96.09c12.12-13.26 35.06-13.26 47.19 0L239.6 138z"
    />
    <path
      d="M416 320h-96c-17.6 0-32 14.4-32 32v96c0 17.6 14.4 32 32 32h96c17.6 0 32-14.4 32-32v-96c0-17.6-14.4-32-32-32zm64-288H320c-17.67 0-32 14.33-32 32v160c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V64c0-17.67-14.3-32-32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgArrowUpBigSmall;
