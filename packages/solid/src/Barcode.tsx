import * as React from "react";
import { SVGProps } from "react";

const SvgBarcode = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M40 32c13.25 0 24 10.75 24 24v400c0 13.3-10.75 24-24 24H24c-13.25 0-24-10.7-24-24V56c0-13.25 10.75-24 24-24h16zm88 16v416c0 8.8-7.2 16-16 16s-16-7.2-16-16V48c0-8.84 7.2-16 16-16s16 7.16 16 16zm72-16c13.3 0 24 10.75 24 24v400c0 13.3-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24V56c0-13.25 10.7-24 24-24h16zm96 0c13.3 0 24 10.75 24 24v400c0 13.3-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24V56c0-13.25 10.7-24 24-24h16zm152 24c0-13.25 10.7-24 24-24h16c13.3 0 24 10.75 24 24v400c0 13.3-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24V56zm-64-8c0-8.84 7.2-16 16-16s16 7.16 16 16v416c0 8.8-7.2 16-16 16s-16-7.2-16-16V48z" />
  </svg>
);

export default SvgBarcode;
