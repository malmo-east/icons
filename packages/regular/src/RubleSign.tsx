import * as React from "react";
import { SVGProps } from "react";

const SvgRubleSign = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M240 32c79.5 0 144 64.47 144 144 0 79.5-64.5 144-144 144H112v48h184c13.3 0 24 10.7 24 24s-10.7 24-24 24H112v40c0 13.3-10.7 24-24 24-13.25 0-24-10.7-24-24v-40H24c-13.25 0-24-10.7-24-24s10.75-24 24-24h40v-48H24c-13.25 0-24-10.7-24-24s10.75-24 24-24h40V79.31C64 53.18 85.18 32 111.3 32H240zm96 144c0-53.9-43-96-96-96H112v192h128c53 0 96-43 96-96z" />
  </svg>
);

export default SvgRubleSign;