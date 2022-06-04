import * as React from "react";
import { SVGProps } from "react";

const SvgCompress = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M151.1 31.1c-4.406 0-8 3.578-8 8v136H7.1c-4.406 0-8 3.578-8 8s3.594 8 8 8h144c4.406 0 8-3.578 8-8v-144c0-3.52-2.7-8-8-8zm144 160h144c4.406 0 8-3.578 8-8s-3.594-8-8-8h-136v-136c0-4.422-3.594-8-8-8s-8 3.578-8 8v144c0 5.3 4.5 8 8 8zm144 128h-144c-4.406 0-8 3.578-8 8v144c0 4.422 3.594 8 8 8s8-3.578 8-8v-136h136c4.406 0 8-3.578 8-8s-2.7-8-8-8zm-288 0H7.1c-4.406 0-8 3.578-8 8s3.594 8 8 8h136v136c0 4.422 3.594 8 8 8s8-3.578 8-8v-144c0-3.5-2.7-8-8-8z" />
  </svg>
);

export default SvgCompress;
