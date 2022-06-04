import * as React from "react";
import { SVGProps } from "react";

const SvgInfo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" {...props}>
    <path d="M184 464h-80V200c0-4.406-3.594-7.99-8-7.99L40 192c-4.41 0-8 3.6-8 8s3.59 8 8 8h48v256H8c-4.406 0-8 3.6-8 8s3.594 8 8 8h176c4.406 0 8-3.594 8-8s-3.6-8-8-8zM80 128c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.49-48 48 21.49 48 48 48zm0-80c17.64 0 32 14.36 32 32s-14.36 32-32 32-32-14.35-32-31.99S62.36 48 80 48z" />
  </svg>
);

export default SvgInfo;
