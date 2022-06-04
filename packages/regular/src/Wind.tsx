import * as React from "react";
import { SVGProps } from "react";

const SvgWind = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M24 184h332c50.7 0 92-41.3 92-92S406.7 0 356 0h-36c-13.25 0-24 10.75-24 24s10.8 24 24 24h36c24.25 0 44 19.75 44 44s-19.7 44-44 44H24c-13.25 0-24 10.8-24 24s10.75 24 24 24zm140 144H24c-13.25 0-24 10.8-24 24s10.75 24 24 24h140c24.25 0 44 19.75 44 44s-19.7 44-44 44h-36c-13.25 0-24 10.75-24 24s10.8 24 24 24h36c50.7 0 92-41.3 92-92s-41.3-92-92-92zm256-96H24c-13.25 0-24 10.8-24 24s10.75 24 24 24h396c24.25 0 44 19.75 44 44s-19.7 44-44 44h-36c-13.25 0-24 10.75-24 24s10.8 24 24 24h36c50.7 0 92-41.3 92-92s-41.3-92-92-92z" />
  </svg>
);

export default SvgWind;
