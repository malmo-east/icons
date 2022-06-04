import * as React from "react";
import { SVGProps } from "react";

const SvgBracketCurly = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" {...props}>
    <path d="M80 152.5V104c0-30.88 25.12-56 56-56h48c4.4 0 8-3.58 8-8s-3.6-8-8-8h-48c-39.7 0-72 32.3-72 72v48.45c0 41.08-22.83 78.02-59.58 96.39C1.719 250.2 0 252.1 0 256s1.719 5.797 4.422 7.156C41.17 281.5 64 318.5 64 359.5V408c0 39.7 32.3 72 72 72h48c4.422 0 8-3.578 8-8s-3.578-8-8-8h-48c-30.88 0-56-25.12-56-56v-48.45C80 317.2 58.89 278.7 24.06 256 58.89 233.3 80 194.8 80 152.5z" />
  </svg>
);

export default SvgBracketCurly;
