import * as React from "react";
import { SVGProps } from "react";

const SvgDrawSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M123.3 440c-9.4 23.5-32.44 40-59.3 40-35.35 0-64-28.7-64-64 0-26.9 16.55-49.9 40-59.3V155.3C16.55 145.9 0 122.9 0 96c0-35.35 28.65-64 64-64 26.86 0 49.9 16.55 59.3 40h201.4c9.4-23.45 32.4-40 59.3-40 35.3 0 64 28.65 64 64 0 26.9-16.5 49.9-40 59.3v201.4c23.5 9.4 40 32.4 40 59.3 0 35.3-28.7 64-64 64-26.9 0-49.9-16.5-59.3-40H123.3zM64 112c8.84 0 16-7.2 16-16 0-8.84-7.16-16-16-16s-16 7.16-16 16c0 8.8 7.16 16 16 16zm24 244.7c16 6.4 28.9 18.4 35.3 35.3h201.4c6.4-16.9 18.4-28.9 35.3-35.3V155.3c-16.9-6.4-28.9-19.3-35.3-35.3H123.3c-6.4 16-19.3 28.9-35.3 35.3v201.4zM64 400c-8.84 0-16 7.2-16 16s7.16 16 16 16 16-7.2 16-16-7.16-16-16-16zm320 0c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm0-320c-8.8 0-16 7.16-16 16 0 8.8 7.2 16 16 16s16-7.2 16-16c0-8.84-7.2-16-16-16z" />
  </svg>
);

export default SvgDrawSquare;