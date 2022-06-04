import * as React from "react";
import { SVGProps } from "react";

const SvgHeading = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 456c0 13.25-10.75 24-24 24H312c-13.2 0-24-10.7-24-24s10.75-24 24-24h32V280H104v152h32c13.3 0 24 10.8 24 24s-10.7 24-24 24H24c-13.25 0-24-10.7-24-24s10.75-24 24-24h32V80H24C10.75 80 0 69.25 0 56s10.75-24 24-24h112c13.3 0 24 10.75 24 24s-10.7 24-24 24h-32v152h240V80h-32c-13.2 0-24-10.75-24-24s10.8-24 24-24h112c13.3 0 24 10.75 24 24s-10.7 24-24 24h-32v352h32c13.3 0 24 10.8 24 24z" />
  </svg>
);

export default SvgHeading;
