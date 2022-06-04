import * as React from "react";
import { SVGProps } from "react";

const SvgOption = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M424 80h208c4.4 0 8-3.58 8-8s-3.6-8-8-8H424c-4.4 0-8 3.58-8 8s3.6 8 8 8zm208 352H495.2c-17.34 0-33.41-7.844-44.09-21.5L201.5 91.63C187.8 74.06 167.1 64 144.8 64H8c-4.406 0-8 3.59-8 8s3.594 8 8 8h136.8c17.34 0 33.41 7.844 44.09 21.5l249.6 318.9C452.2 437.9 472.9 448 495.2 448H632c4.406 0 8-3.594 8-8s-3.6-8-8-8z" />
  </svg>
);

export default SvgOption;
