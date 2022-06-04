import * as React from "react";
import { SVGProps } from "react";

const SvgLinesLeaning = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M376 32c4.4 0 8 3.58 8 8v432c0 4.4-3.6 8-8 8s-8-3.6-8-8V40c0-4.42 3.6-8 8-8zm-94 .26c4.3 1.11 6.9 5.47 5.7 9.75L175.7 474c-1.1 4.3-5.4 6.9-10.6 5.7-3.4-1.1-6-5.4-4.8-10.6l112-431.11c1.1-4.27 5.4-6.84 9.7-5.73zM15.5 474.8c-1.53 4.1-6.133 6.2-10.276 4.7-4.144-2.4-6.258-6.1-4.724-10.3l160-431.98c1.5-4.14 6.1-6.25 10.3-4.72 4.1 1.53 6.2 6.14 4.7 10.28L15.5 474.8z" />
  </svg>
);

export default SvgLinesLeaning;
