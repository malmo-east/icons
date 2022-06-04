import * as React from "react";
import { SVGProps } from "react";

const SvgArrowUpFromBracket = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="arrow-up-from-bracket_svg__fa-primary"
      d="m246.6 9.375 128 128c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0L256 109.3V320c0 17.69-14.31 32-32 32s-32-14.31-32-32V109.3l-73.4 73.3c-12.5 12.5-32.75 12.5-45.25 0-12.49-12.49-12.51-32.74 0-45.25l128-128c12.55-12.475 32.75-12.475 45.25.025z"
    />
    <path
      d="M384 352v64c0 17.67-14.33 32-32 32H96c-17.67 0-32-14.33-32-32v-64c0-17.67-14.33-32-32-32S0 334.33 0 352v64c0 53.02 42.98 96 96 96h256c53.02 0 96-42.98 96-96v-64c0-17.67-14.33-32-32-32s-32 14.3-32 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgArrowUpFromBracket;
