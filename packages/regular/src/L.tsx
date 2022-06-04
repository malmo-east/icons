import * as React from "react";
import { SVGProps } from "react";

const SvgL = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M296 480H56c-13.25 0-24-10.7-24-24V56c0-13.25 10.75-24 24-24s24 10.75 24 24v376h216c13.25 0 24 10.75 24 24s-10.7 24-24 24z" />
  </svg>
);

export default SvgL;
