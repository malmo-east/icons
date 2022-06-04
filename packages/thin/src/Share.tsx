import * as React from "react";
import { SVGProps } from "react";

const SvgShare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M136 231.1h346.7L307.6 78c-3.328-2.906-3.672-7.969-.75-11.31 2.922-3.313 7.969-3.625 11.28-.75l192 168c.87 1.56 1.87 3.76 1.87 5.16 0 2.313-1 4.497-2.734 6.028l-192 168a8.03 8.03 0 0 1-5.266 1.969 8.05 8.05 0 0 1-6.016-2.719c-2.922-3.344-2.578-8.406.75-11.31l175.1-153.1H136c-66.17 0-120 53.84-120 120v72C16 444.4 12.42 448 8 448s-8-3.6-8-8.9v-72c0-75 61.02-136 136-136z" />
  </svg>
);

export default SvgShare;
