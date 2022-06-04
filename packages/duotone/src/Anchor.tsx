import * as React from "react";
import { SVGProps } from "react";

const SvgAnchor = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="anchor_svg__fa-primary"
      d="M256 448V240h64v208h48c53 0 96-43 96-96v-6.1l-7.9 6.2c-8.5 10.2-23.7 10.2-33.1 0-9.3-8.5-9.3-23.7 0-33.1l56-56c9.4-9.3 24.6-9.3 33.1 0l56 56c10.2 9.4 10.2 24.6 0 33.1-8.5 10.2-23.7 10.2-33.1 0l-7-6.2v6.1c0 88.4-71.6 160-160 160H208c-88.4 0-160-71.6-160-160v-6.1l-7.03 6.2c-9.37 10.2-24.57 10.2-33.941 0-9.372-8.5-9.372-23.7 0-33.1l56.001-56c9.37-9.3 24.57-9.3 33.94 0l55.13 56c10.2 9.4 10.2 24.6 0 33.1-8.5 10.2-23.7 10.2-33.1 0l-7-6.2v6.1c0 53 42.1 96 96 96h48z"
    />
    <path
      d="M384 96c0 33.4-17.9 62.8-42.9 80H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32h10.9C209 158.8 192 129.4 192 96c0-53.02 42.1-96 96-96 53 0 96 42.98 96 96zm-96 32c17.7 0 32-14.3 32-32 0-17.67-14.3-32-32-32s-32 14.33-32 32c0 17.7 14.3 32 32 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgAnchor;
