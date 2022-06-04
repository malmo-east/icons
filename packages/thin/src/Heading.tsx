import * as React from "react";
import { SVGProps } from "react";

const SvgHeading = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 472c0 4.422-3.594 8-8 8H328c-4.4 0-8-3.6-8-8s3.594-8 8-8h48V264H72v200h48c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.406 0-8-3.6-8-8s3.594-8 8-8h48V48H8c-4.406 0-8-3.58-8-8s3.594-8 8-8h112c4.4 0 8 3.58 8 8s-3.6 8-8 8H72v200h304V48h-48c-4.4 0-8-3.58-8-8s3.6-8 8-8h112c4.4 0 8 3.58 8 8s-3.6 8-8 8h-48v416h48c4.4 0 8 3.6 8 8z" />
  </svg>
);

export default SvgHeading;
