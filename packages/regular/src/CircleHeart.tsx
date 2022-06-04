import * as React from "react";
import { SVGProps } from "react";

const SvgCircleHeart = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M144.9 272.9c-26.3-26.7-26.3-70 0-96.6 26.3-26.7 68.9-26.7 95.2 0l15.9 16.1 15.9-16.1c26.3-26.7 68.9-26.7 95.2 0 26.3 26.6 26.3 69.9 0 96.6l-88.6 89.9c-6.3 6.4-14.4 9.5-22.6 9.5-8.1 0-16.2-3.2-22.4-9.5l-88.6-89.9zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z" />
  </svg>
);

export default SvgCircleHeart;
