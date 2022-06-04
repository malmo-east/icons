import * as React from "react";
import { SVGProps } from "react";

const SvgP = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M8 480c-4.406 0-8-3.6-8-8V40c0-4.41 3.594-8 8-8h176c75 0 136 61 136 136s-61 136-136 136H16v168c0 4.4-3.59 8-8 8zm8-192h168c66.16 0 120-53.84 120-120S250.2 48 184 48H16v240z" />
  </svg>
);

export default SvgP;
