import * as React from "react";
import { SVGProps } from "react";

const SvgLinkHorizontal = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M320 432c-70.7 0-128-57.3-128-128s57.3-128 128-128h56c4.4 0 8 3.6 8 8s-3.6 8-8 8h-56c-61.9 0-112 50.1-112 112s50.1 112 112 112h192c61.9 0 112-50.1 112-112s-50.1-112-112-112h-24c-4.4 0-8-3.6-8-8s3.6-8 8-8h24c70.7 0 128 57.3 128 128s-57.3 128-128 128H320zm0-352c70.7 0 128 57.3 128 128s-57.3 128-128 128h-56c-4.4 0-8-3.6-8-8s3.6-8 8-8h56c61.9 0 112-50.1 112-112S381.9 96 320 96H128C66.14 96 16 146.1 16 208s50.14 112 112 112h24c4.4 0 8 3.6 8 8s-3.6 8-8 8h-24C57.31 336 0 278.7 0 208S57.31 80 128 80h192z" />
  </svg>
);

export default SvgLinkHorizontal;
