import * as React from "react";
import { SVGProps } from "react";

const SvgCircleTrash = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m201.4 128 11.3-11.3c3-3 7.1-4.7 10.4-4.7H288c4.2 0 8.3 1.7 11.3 4.7l11.3 11.3H352c8.8 0 16 7.2 16 16s-7.2 16-16 16H159.1c-7.9 0-16-7.2-16-16s8.1-16 16-16h42.3zM352 192l-13.6 162.7c-1.3 16.5-15.2 29.3-31.8 29.3H205.4c-16.6 0-30.5-12.8-31.8-29.3L160 192h192zm160 64c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z" />
  </svg>
);

export default SvgCircleTrash;
