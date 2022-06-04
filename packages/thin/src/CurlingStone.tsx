import * as React from "react";
import { SVGProps } from "react";

const SvgCurlingStone = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M480 224v-8c0-30.88-25.12-56-56-56H191.1v-56c0-30.88 25.12-56 56-56h160c4.406 0 8-3.578 8-8s-3.594-8-8-8h-160c-39.69 0-72 32.3-72 72v56h-24c-30.88 0-56 25.12-56 56v8c-53.02 0-96 42.98-96 96v64c0 53.02 42.98 96 96 96h384c53.02 0 96-42.98 96-96v-64c.9-53.9-42.1-96-95.1-96zm-368.9-8c0-22.06 17.94-40 40-40h272c22.06 0 40 17.94 40 40v8h-352v-8zm448 168c0 44.11-35.89 80-80 80h-384c-44.11 0-80-35.89-80-80v-24h544v24zm-544-40v-24c0-44.11 35.89-80 80-80h384c44.11 0 80 35.89 80 80v24h-544z" />
  </svg>
);

export default SvgCurlingStone;
