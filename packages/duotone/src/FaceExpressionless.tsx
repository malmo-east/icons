import * as React from "react";
import { SVGProps } from "react";

const SvgFaceExpressionless = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="face-expressionless_svg__fa-primary"
      d="M208 192c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16h64zm160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16h64z"
    />
    <path
      d="M0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm160 80c-8.8 0-16 7.2-16 16s7.2 16 16 16h192c8.8 0 16-7.2 16-16s-7.2-16-16-16H160zm-16-112h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16s7.2 16 16 16zm160-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgFaceExpressionless;
