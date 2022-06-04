import * as React from "react";
import { SVGProps } from "react";

const SvgStairs = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M576 40c0 4.422-3.594 8-8 8H440v136c0 4.4-3.6 8-8 8H296v136c0 4.422-3.594 8-8 8H152v136c0 4.4-3.6 8-8 8H8c-4.406 0-8-3.6-8-8s3.594-8 8-8h128V328c0-4.4 3.6-8 8-8h136V184c0-4.4 3.6-8 8-8h136V40c0-4.42 3.6-8 8-8h136c4.4 0 8 3.58 8 8z" />
  </svg>
);

export default SvgStairs;
