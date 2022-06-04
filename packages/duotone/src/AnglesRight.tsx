import * as React from "react";
import { SVGProps } from "react";

const SvgAnglesRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="angles-right_svg__fa-primary"
      d="M256 448c-8.188 0-16.38-3.125-22.62-9.375-12.5-12.5-12.5-32.75 0-45.25L370.8 256 233.4 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160c-6.25 6.3-14.45 9.4-22.65 9.4z"
    />
    <path
      d="M64 448c-8.188 0-16.38-3.125-22.62-9.375-12.5-12.5-12.5-32.75 0-45.25L178.8 256 41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgAnglesRight;
