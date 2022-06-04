import * as React from "react";
import { SVGProps } from "react";

const SvgShelvesEmpty = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M600 0c-4.422 0-8 3.594-8 8v168H48V8c0-4.406-3.58-8-8-8s-8 3.594-8 8v496c0 4.4 3.58 8 8 8s8-3.594 8-8v-56h544v56c0 4.406 3.578 8 8 8s8-3.6 8-8V8c0-4.406-3.6-8-8-8zm-8 432H48V192h544v240z" />
  </svg>
);

export default SvgShelvesEmpty;
