import * as React from "react";
import { SVGProps } from "react";

const SvgExclamation = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512" {...props}>
    <path d="M64 384c4.406 0 8-3.578 8-8V40c0-4.422-3.594-7.994-8-7.994S56 35.58 56 40v336c0 4.4 3.59 8 8 8zm0 48c-8.836 0-16 7.164-16 16s7.164 16 16 16 16-7.164 16-16-7.16-16-16-16z" />
  </svg>
);

export default SvgExclamation;
