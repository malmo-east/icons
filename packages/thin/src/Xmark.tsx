import * as React from "react";
import { SVGProps } from "react";

const SvgXmark = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M317.7 402.3a7.994 7.994 0 0 1 0 11.31 7.99 7.99 0 0 1-11.31 0L160 267.3 13.7 413.6a7.99 7.99 0 0 1-11.31 0 7.994 7.994 0 0 1 0-11.31L148.7 256 2.344 109.7c-3.125-3.125-3.125-8.188 0-11.31s8.188-3.125 11.31 0L160 244.7 306.3 98.4c3.125-3.125 8.188-3.125 11.31 0s3.125 8.188 0 11.31L171.3 256l146.4 146.3z" />
  </svg>
);

export default SvgXmark;
