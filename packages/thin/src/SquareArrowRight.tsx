import * as React from "react";
import { SVGProps } from "react";

const SvgSquareArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M349.7 261.7a7.994 7.994 0 0 0 0-11.31l-120-120c-1.6-1.59-3.6-2.39-5.7-2.39s-4.1.8-5.7 2.3a7.994 7.994 0 0 0 0 11.31L324.7 248H104c-4.41 0-8 3.6-8 7.1 0 5.3 3.59 8.9 8 8.9h220.7L218.4 370.3c-3.125 3.125-3.125 8.188 0 11.31s8.188 3.125 11.31 0L349.7 261.7zM448 416V96c0-35.35-28.65-64-64-64H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.3 0 64-28.7 64-64zM64 464c-26.47 0-48-21.53-48-48V96c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48v320c0 26.47-21.53 48-48 48H64z" />
  </svg>
);

export default SvgSquareArrowRight;
