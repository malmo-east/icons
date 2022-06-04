import * as React from "react";
import { SVGProps } from "react";

const SvgDrawSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="draw-square_svg__fa-primary"
      d="M128 96c0 35.3-28.65 64-64 64S0 131.3 0 96c0-35.35 28.65-64 64-64s64 28.65 64 64zM0 416c0-35.3 28.65-64 64-64s64 28.7 64 64-28.65 64-64 64-64-28.7-64-64zm320 0c0-35.3 28.7-64 64-64s64 28.7 64 64-28.7 64-64 64-64-28.7-64-64zm0-320c0-35.35 28.7-64 64-64s64 28.65 64 64c0 35.3-28.7 64-64 64s-64-28.7-64-64z"
    />
    <path
      d="M320 96c0 11.7 3.1 22.6 8.6 32H119.4c5.5-9.4 7.7-20.3 7.7-32 0-11.66-2.2-22.59-7.7-32h209.2c-5.5 9.41-8.6 20.34-8.6 32zm64 64c11.7 0 22.6-3.1 32-8.6v209.2c-9.4-5.5-20.3-8.6-32-8.6s-22.6 3.1-32 8.6V151.4c9.4 5.5 20.3 8.6 32 8.6zm-288-8.6v209.2c-9.41-5.5-20.34-8.6-32-8.6s-22.59 3.1-32 8.6V151.4c9.41 5.5 20.34 8.6 32 8.6s22.59-3.1 32-8.6zM328.6 448H119.4c5.5-9.4 7.7-20.3 7.7-32s-2.2-22.6-7.7-32h209.2c-5.5 9.4-8.6 20.3-8.6 32s3.1 22.6 8.6 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgDrawSquare;