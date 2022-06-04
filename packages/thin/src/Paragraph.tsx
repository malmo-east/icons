import * as React from "react";
import { SVGProps } from "react";

const SvgParagraph = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M440 32H176C96.59 32 32 96.59 32 176s64.59 144 144 144h72v152c0 4.422 3.579 8 8.001 8s7.999-3.6 7.999-8V48h80v424c0 4.422 3.579 8 8.001 8s7.999-3.6 7.999-8V48h80c4.4 0 8-3.58 8-8s-3.6-8-8-8zM248 304h-72c-70.58 0-128-57.42-128-128S105.42 48 176 48h72v256z" />
  </svg>
);

export default SvgParagraph;
