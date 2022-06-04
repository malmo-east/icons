import * as React from "react";
import { SVGProps } from "react";

const SvgBreadSlice = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 32C96 32 0 112 0 176.1 0 203 21.56 224 56.89 224H64v224c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32V224h7.111C490.4 224 512 203 512 176.1 512 112 416 32 256 32zm199.1 176H432v240c0 8.822-7.178 16-16 16H96c-8.822 0-16-7.178-16-16V208H56.89C32.43 208 16 195.5 16 176.1 16 124.3 101.5 48 256 48s240 76.25 240 128.1c0 19.4-16.4 31.9-40.9 31.9z" />
  </svg>
);

export default SvgBreadSlice;
