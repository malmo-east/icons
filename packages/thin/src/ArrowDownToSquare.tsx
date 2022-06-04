import * as React from "react";
import { SVGProps } from "react";

const SvgArrowDownToSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M440 128h-80c-4.4 0-8 3.6-8 8s3.594 8 8 8h80c13.22 0 24 10.78 24 24v304c0 13.22-10.78 24-24 24H72c-13.22 0-24-10.78-24-24V168c0-13.22 10.78-24 24-24h80c4.4 0 8-3.6 8-8s-3.6-8-8-8H72c-22.06 0-40 17.9-40 40v304c0 22.1 17.94 40 40 40h368c22.06 0 40-17.94 40-40V168c0-22.1-17.9-40-40-40zM154.3 274.3a7.994 7.994 0 0 0 0 11.31l96 96c1.6 1.59 3.6 2.39 5.7 2.39s4.094-.781 5.656-2.344l96-96c3.125-3.125 3.125-8.188 0-11.31s-8.188-3.125-11.31 0L264 356.7V8c0-4.406-3.6-8-8-8s-8 3.594-8 8v348.7l-82.3-82.4a8.15 8.15 0 0 0-11.4 0z" />
  </svg>
);

export default SvgArrowDownToSquare;
