import * as React from "react";
import { SVGProps } from "react";

const SvgKipSign = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M88 32c13.3 0 24 10.75 24 24v154.5L312.3 37.82c10.1-8.65 25.2-7.53 33.9 2.51 8.6 10.04 7.5 25.19-2.5 33.85L160.6 232H360c13.3 0 24 10.7 24 24s-10.7 24-24 24H160.6l183.1 157.8c10 8.7 11.1 23.8 2.5 33.9-8.7 10-23.8 11.1-33.9 2.5L112 301.5v154.6c0 14.2-10.7 24-24 24-13.25 0-24-9.8-24-24V280H24c-13.25 0-24-10.7-24-24s10.75-24 24-24h40V56c0-13.25 10.75-24 24-24z" />
  </svg>
);

export default SvgKipSign;