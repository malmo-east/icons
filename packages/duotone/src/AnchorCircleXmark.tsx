import * as React from "react";
import { SVGProps } from "react";

const SvgAnchorCircleXmark = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="anchor-circle-xmark_svg__fa-primary"
      d="M640 368c0 79.5-64.5 144-144 144s-144-64.5-144-144 64.5-144 144-144 144 64.5 144 144zm-107.3-59.3L496 345.4l-36.7-36.7c-6.2-6.3-16.4-6.3-22.6 0-6.3 6.2-6.3 16.4 0 22.6l36.7 36.7-36.7 36.7c-6.3 6.2-6.3 16.4 0 22.6 6.2 6.3 16.4 6.3 22.6 0l36.7-36.7 36.7 36.7c6.2 6.3 16.4 6.3 22.6 0 6.3-6.2 6.3-16.4 0-22.6L518.6 368l36.7-36.7c6.3-6.2 6.3-16.4 0-22.6-6.2-6.3-16.4-6.3-22.6 0z"
    />
    <path
      d="M384 96c0 33.4-17.9 62.8-42.9 80H352c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32.9v208h20.1c12.6 24.7 30.8 45.1 53 62.2-7.9 1.2-16 1.8-24.2 1.8H208c-88.4 0-160-71.6-160-160v-6.1l-7.03 6.2c-9.37 10.2-24.57 10.2-33.941 0-9.372-8.5-9.372-23.7 0-33.1l56.001-56c9.37-9.3 24.57-9.3 33.94 0l55.13 56c10.2 9.4 10.2 24.6 0 33.1-8.5 10.2-23.7 10.2-33.1 0l-7-6.2v6.1c0 53 42.1 96 96 96h48V240h-32c-17.7 0-32-14.3-32-32s14.3-32 32-32h10.9C209 158.8 192 129.4 192 96c0-53.02 42.1-96 96-96 53 0 96 42.98 96 96zm-96.9-32c-16.8 0-32 14.33-32 32 0 17.7 15.2 32 32 32 18.6 0 32-14.3 32-32 0-17.67-13.4-32-32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgAnchorCircleXmark;
