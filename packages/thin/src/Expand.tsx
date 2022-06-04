import * as React from "react";
import { SVGProps } from "react";

const SvgExpand = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M152 32H8c-4.406 0-8 3.59-8 8v144c0 4.4 3.594 8 8 8s8-3.6 8-8V48h136c4.4 0 8-3.59 8-8s-3.6-8-8-8zm288 0H296c-4.4 0-8 3.59-8 8s3.594 8 8 8h136v136c0 4.4 3.6 8 8 8s8-3.6 8-8V40c0-4.41-3.6-8-8-8zm0 288c-4.406 0-8 3.594-8 8v136H296c-4.406 0-8 3.594-8 8s3.6 8 8 8h144c4.406 0 8-3.594 8-8V328c0-4.4-3.6-8-8-8zM152 464H16V328c0-4.4-3.59-8-8-8s-8 3.6-8 8v144c0 4.4 3.594 8 8 8h144c4.4 0 8-3.6 8-8s-3.6-8-8-8z" />
  </svg>
);

export default SvgExpand;
