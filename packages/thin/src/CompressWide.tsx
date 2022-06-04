import * as React from "react";
import { SVGProps } from "react";

const SvgCompressWide = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M151.1 64c-4.406 0-8 3.578-8 8v136H7.1c-3.506 0-7.1 3.6-7.1 8s3.594 8 7.1 8h144c4.406 0 8-3.578 8-8V72c0-4.42-2.7-8-8-8zm208 160h144c4.406 0 8-3.578 8-8s-3.594-8-8-8h-136V72c0-4.422-3.594-8-8-8s-8 3.578-8 8v144c0 4.4 4.5 8 8 8zm144 64h-144c-4.406 0-8 3.578-8 8v144c0 4.422 3.594 8 8 8s8-3.578 8-8V304h136c4.406 0 8-3.578 8-8s-2.7-8-8-8zm-352 0H7.1c-3.506 0-7.1 3.6-7.1 8s3.594 8 7.1 8h136v136c0 4.422 3.594 8 8 8s8-3.578 8-8V296c0-4.4-2.7-8-8-8z" />
  </svg>
);

export default SvgCompressWide;
