import * as React from "react";
import { SVGProps } from "react";

const SvgScroll = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M568 336H280c-4.422 0-8 3.594-8 8v56c0 35.28-28.7 64-64 64s-64-28.72-64-64V104c0-22.73-10.8-42.79-27.31-56H400c35.3 0 64 28.72 64 64v184c0 4.406 3.578 8 8 8s8-3.6 8-8V112c0-44.12-35.9-80-80-80H72C32.3 32 0 64.31 0 104v64c0 4.4 3.578 8 8 8h80c4.42 0 8-3.6 8-8s-3.58-8-8-8H16v-56c0-30.88 25.12-56 56-56s56 25.13 56 56v296c0 44.1 35.9 80 80 80h288c44.11 0 80-35.88 80-80v-56c0-4.4-3.6-8-8-8zm-8 64c0 35.28-28.7 64-64 64H255.1c20.3-14.6 32.9-37.9 32.9-64v-48h272v48z" />
  </svg>
);

export default SvgScroll;
