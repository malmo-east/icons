import * as React from "react";
import { SVGProps } from "react";

const SvgPresentationScreen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M568 0H8C3.594 0 0 3.578 0 8s3.594 8 8 8h560c4.4 0 8-3.58 8-8s-3.6-8-8-8zm-32 48c-4.406 0-8 3.578-8 8v256c0 13.23-10.78 24-24 24H72c-13.22 0-24-10.77-24-24V56c0-4.422-3.594-8-8-8s-8 3.58-8 8v256c0 22.1 17.94 40 40 40h208v52.69l-93.66 93.66c-3.125 3.125-3.125 8.188 0 11.31s8.188 3.125 11.31 0l87.03-87.03c1.12.57 2.02 1.37 3.32 1.37s2.232-.826 3.314-1.373l87.03 87.03C379.9 511.2 381.9 512 384 512s4.094-.781 5.656-2.344a7.994 7.994 0 0 0 0-11.31L296 404.7V352h208c22.1 0 40-17.9 40-40V56c0-4.42-3.6-8-8-8z" />
  </svg>
);

export default SvgPresentationScreen;
