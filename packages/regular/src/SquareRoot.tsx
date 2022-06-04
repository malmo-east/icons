import * as React from "react";
import { SVGProps } from "react";

const SvgSquareRoot = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M576 24c0 13.25-10.75 24-24 24H338.9L231.3 493.6c-2.406 9.906-10.81 17.25-20.94 18.25-.813.094-1.635.135-2.417.135-9.25 0-17.77-5.354-21.74-13.85L80.72 272H24c-13.25 0-24-10.7-24-24s10.75-24 24-24h72c9.312 0 17.81 5.396 21.75 13.83l83 177.9 95.91-397.3C299.3 7.594 308.9.01 320 .01L552 0c13.3 0 24 10.75 24 24z" />
  </svg>
);

export default SvgSquareRoot;
