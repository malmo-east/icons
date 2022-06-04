import * as React from "react";
import { SVGProps } from "react";

const SvgArrowRightLong = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="arrow-right-long_svg__fa-primary"
      d="M320 384c0-8.188 3.125-16.38 9.375-22.62L434.8 256 329.4 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128c12.5 12.5 12.5 32.75 0 45.25l-128 128c-12.5 12.5-32.75 12.5-45.25 0-6.3-6.2-9.4-14.4-9.4-22.6z"
    />
    <path
      d="M402.8 288H32c-17.69 0-32-14.3-32-32.9S14.31 224 32 224h370.8l32 32-32 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgArrowRightLong;
