import * as React from "react";
import { SVGProps } from "react";

const SvgSquareArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M218.3 381.7a7.994 7.994 0 0 0 11.31 0l120-120c1.59-1.6 2.39-3.6 2.39-5.7s-.781-4.094-2.344-5.656a7.994 7.994 0 0 0-11.31 0L232 356.7V136c0-4.406-3.576-8-7.997-8S216 131.6 216 136v220.7L109.7 250.3c-3.125-3.125-8.188-3.125-11.31 0s-3.125 8.188 0 11.31L218.3 381.7zM64 480h320c35.35 0 64-28.65 64-64V96c0-35.35-28.65-64-64-64H64C28.65 32 0 60.65 0 96v320c0 35.3 28.65 64 64 64zM16 96c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48v320c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V96z" />
  </svg>
);

export default SvgSquareArrowDown;
