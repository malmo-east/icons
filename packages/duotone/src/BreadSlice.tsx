import * as React from "react";
import { SVGProps } from "react";

const SvgBreadSlice = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="bread-slice_svg__fa-primary"
      d="M144 384c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm0-96c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm96 96c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.164 16-16c0-8.8-7.2-16-16-16z"
    />
    <path
      d="M256 32C96 32 0 112 0 176.1 0 203 21.56 224 56.89 224H64v224c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32V224h7.111C490.4 224 512 203 512 176.1 512 112 416 32 256 32zM144 416c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm0-96c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm96 96c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.162 16 16c0 8.8-7.2 16-16 16z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBreadSlice;
