import * as React from "react";
import { SVGProps } from "react";

const SvgTally3 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="tally-3_svg__fa-primary"
      d="M288 32c17.7 0 32 14.33 32 32v384c0 17.7-14.3 32-32 32s-32-14.3-32-32V64c0-17.67 14.3-32 32-32z"
    />
    <path
      d="M64 448c0 17.7-14.33 32-32 32S0 465.7 0 448V64c0-17.67 14.33-32 32-32s32 14.33 32 32v384zm128 0c0 17.7-14.3 32-32 32s-32-14.3-32-32V64c0-17.67 14.3-32 32-32s32 14.33 32 32v384z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTally3;
