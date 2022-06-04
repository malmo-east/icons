import * as React from "react";
import { SVGProps } from "react";

const SvgContainerStorage = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M616 432h-8V80h8c13.3 0 24-10.75 24-24s-10.7-24-24-24H24C10.75 32 0 42.75 0 56s10.75 24 24 24h8v352h-8c-13.25 0-24 10.8-24 24s10.75 24 24 24h592c13.25 0 24-10.75 24-24s-10.7-24-24-24zm-56 0H80V80h480v352zm-368-32c13.25 0 24-10.75 24-24V136c0-13.2-10.7-24-24-24s-24 10.8-24 24v240c0 13.3 10.8 24 24 24zm128 0c13.25 0 24-10.75 24-24V136c0-13.25-10.75-24-24-24s-24 10.8-24 24v240c0 13.3 10.8 24 24 24zm128 0c13.25 0 24-10.75 24-24V136c0-13.25-10.75-24-24-24s-24 10.75-24 24v240c0 13.3 10.8 24 24 24z" />
  </svg>
);

export default SvgContainerStorage;