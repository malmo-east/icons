import * as React from "react";
import { SVGProps } from "react";

const SvgTextSize = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M0 40v80c0 4.4 3.578 8 8 8s8-3.6 8-8V48h168v416h-80c-4.42 0-8 3.6-8 8s3.58 8 8 8h176c4.4 0 8-3.6 8-8s-3.6-8-8-8h-80V48h168v72c0 4.4 3.6 8 8 8s8-3.6 8-8V40c0-4.42-3.6-8-8-8H8c-4.422 0-8 3.58-8 8zm320 192v80c0 4.4 3.6 8 8 8s8-3.578 8-8v-72h136v224h-64c-4.422 0-8 3.578-8 8s3.6 8 8 8h144c4.422 0 8-3.578 8-8s-3.578-8-8-8h-64V240h136v72c0 4.422 3.578 8 8 8s8-3.6 8-8v-80c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8z" />
  </svg>
);

export default SvgTextSize;
