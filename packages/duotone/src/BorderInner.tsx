import * as React from "react";
import { SVGProps } from "react";

const SvgBorderInner = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="border-inner_svg__fa-primary"
      d="M192 288H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h160V64c0-17.67 14.3-32 32-32s32 14.33 32 32v160h160c17.7 0 32 14.3 32 32s-14.3 32-32 32H256v160c0 17.7-14.3 32-32 32s-32-14.3-32-32V288z"
    />
    <path
      d="M416 416c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm0-96c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-384 0c17.67 0 32 14.3 32 32s-14.33 32-32 32-32-14.3-32-32 14.33-32 32-32zm416-160c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zM32 128c17.67 0 32 14.3 32 32s-14.33 32-32 32-32-14.3-32-32 14.33-32 32-32zm416-64c0 17.67-14.3 32-32 32s-32-14.33-32-32 14.3-32 32-32 32 14.33 32 32zM64 64c0 17.67-14.33 32-32 32S0 81.67 0 64s14.33-32 32-32 32 14.33 32 32zM32 416c17.67 0 32 14.3 32 32s-14.33 32-32 32-32-14.3-32-32 14.33-32 32-32zM352 64c0 17.67-14.3 32-32 32s-32-14.33-32-32 14.3-32 32-32 32 14.33 32 32zm-32 352c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zM160 64c0 17.67-14.3 32-32 32S96 81.67 96 64s14.3-32 32-32 32 14.33 32 32zm-32 352c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBorderInner;