import * as React from "react";
import { SVGProps } from "react";

const SvgFrame = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M424 144h-40v224h40c13.3 0 24 10.7 24 24s-10.7 24-24 24h-40v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40H112v40c0 13.3-10.7 24-24 24-13.25 0-24-10.7-24-24v-40H24c-13.25 0-24-10.7-24-24s10.75-24 24-24h40V144H24c-13.25 0-24-10.7-24-24s10.75-24 24-24h40V56c0-13.25 10.75-24 24-24 13.3 0 24 10.75 24 24v40h224V56c0-13.25 10.7-24 24-24s24 10.75 24 24v40h40c13.3 0 24 10.7 24 24s-10.7 24-24 24zM112 368h224V144H112v224z" />
  </svg>
);

export default SvgFrame;
