import * as React from "react";
import { SVGProps } from "react";

const SvgArrowDownLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path
      className="arrow-down-left_svg__fa-primary"
      d="M256 416H32c-17.67 0-32-14.31-32-32V160c0-17.69 14.33-32 32-32s32 14.31 32 32v192h192c17.67 0 32 14.31 32 32s-14.3 32-32 32z"
    />
    <path
      d="M310.6 150.6 109.3 352H64v-45.2l201.4-201.4c12.5-12.5 32.75-12.5 45.25 0s12.45 32.7-.05 45.2z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgArrowDownLeft;
