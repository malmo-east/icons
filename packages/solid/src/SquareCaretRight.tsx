import * as React from "react";
import { SVGProps } from "react";

const SvgSquareCaretRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96c0-35.35-28.7-64-64-64zm-71.7 241.6-112 104c-4.5 4.2-10.4 6.4-16.3 6.4-3.25 0-6.5-.656-9.594-2C165.7 378.2 160 369.5 160 360V152c0-9.531 5.656-18.19 14.41-22 8.75-3.75 18.94-2.062 25.94 4.406l112 104C317.2 242.1 320 249.3 320 256s-2.8 13-7.7 17.6z" />
  </svg>
);

export default SvgSquareCaretRight;
