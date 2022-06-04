import * as React from "react";
import { SVGProps } from "react";

const SvgSquareCaretLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96c0-35.35-28.7-64-64-64zm-96 328c0 9.531-5.656 18.19-14.41 22-3.09 1.3-6.29 2-9.59 2a24.097 24.097 0 0 1-16.34-6.406l-112-104C130.8 269 128 262.7 128 256s2.781-13.03 7.656-17.59l112-104c7.031-6.469 17.22-8.156 25.94-4.406C282.3 133.8 288 142.5 288 152v208z" />
  </svg>
);

export default SvgSquareCaretLeft;
