import * as React from "react";
import { SVGProps } from "react";

const SvgFaceHushed = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M160.4 256c0-8.8 7.1-16 16-16 8.8 0 16 7.2 16 16s-7.2 16-16 16c-8.9 0-16-7.2-16-16zm192 0c0 8.8-7.2 16-16 16-8.9 0-16-7.2-16-16s7.1-16 16-16c8.8 0 16 7.2 16 16zm-242.6-73.3c-3 3.2-8.1 3.3-11.3-.6-3.21-3-3.35-7.2-.31-10.4 23.71-25.1 56.61-41.4 93.31-43.7 4.4-.3 8.2 3.1 7.6 7.5 1.2 4.4-2.2 8.2-6.6 7.6-33.4 2-61.6 17.4-82.7 39.6zM320.5 128c36.7 2.3 69.6 18.6 93.3 43.7 3 3.2 2.9 7.4-.3 10.4-3.2 3.9-8.3 3.8-11.3.6-21.1-22.2-50.2-37.6-82.7-39.6-4.4.6-7.8-3.2-7.5-7.6.3-4.4 4.1-7.8 8.5-7.5zm-.5 256c0 35.3-28.7 64-64 64s-64-28.7-64-64 28.7-64 64-64 64 28.7 64 64zm-64-48c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm256-80c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 16C123.5 16 16 123.5 16 256s107.5 240 240 240 240-107.5 240-240S388.5 16 256 16z" />
  </svg>
);

export default SvgFaceHushed;
