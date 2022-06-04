import * as React from "react";
import { SVGProps } from "react";

const SvgClockDesk = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M224 96c4.4 0 8 3.58 8 8v116.7l53.7 53.6c3.1 3.2 3.1 8.2 0 11.4a8.15 8.15 0 0 1-11.4 0l-56-56c-1.5-1.5-2.3-3.6-2.3-5.7V104c0-4.42 3.6-8 8-8zm0-96c123.7 0 224 100.3 224 224v232c0 30.9-25.1 56-56 56H56c-30.93 0-56-25.1-56-56V224C0 100.3 100.3 0 224 0zm0 16C109.1 16 16 109.1 16 224s93.1 208 208 208 208-93.1 208-208S338.9 16 224 16zm208 291.3C398.9 389.8 318.3 448 224 448S49.05 389.8 16 307.3V456c0 22.1 17.91 40 40 40h336c22.1 0 40-17.9 40-40V307.3z" />
  </svg>
);

export default SvgClockDesk;
