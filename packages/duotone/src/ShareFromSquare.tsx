import * as React from "react";
import { SVGProps } from "react";

const SvgShareFromSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="share-from-square_svg__fa-primary"
      d="M568.9 176.5 418 314.7c-13.2 12.1-34 1.4-34-16.5v-75.1c-128 .9-197.3 29.1-157 157.3 4.473 14.22-12.8 25.24-24.94 16.46C163.2 368.8 128 314.9 128 260.6 128 126.1 241.2 97.63 384 96V21.84c0-18.8 20.81-28.61 34.02-16.52l150.9 138.2c9.48 8.68 9.48 24.28-.02 32.98z"
    />
    <path
      d="M416 384c-17.67 0-32 14.33-32 32v31.1l-320-.001V128h32c17.67 0 32-14.32 32-32s-14.3-32-32-32H64C28.65 64 0 92.65 0 128v319.1c0 35.34 28.65 64 64 64l320-.001c35.35 0 64-28.66 64-64V416c0-17.7-14.3-32-32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgShareFromSquare;
