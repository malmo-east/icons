import * as React from "react";
import { SVGProps } from "react";

const SvgCompass = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m306.7 325.1-144.3 55.5c-20.3 7.5-38.5-11.6-31-31l55.5-144.3c3.2-8.5 9.9-15.2 18.4-18.4l144.3-55.5c19.4-7.5 38.5 10.7 31 31l-55.5 144.3c-3.2 8.5-9.9 15.2-18.4 18.4zM255.1 224c-16.8 0-32 14.3-32 32s15.2 32 32 32c18.6 0 32.9-14.3 32.9-32s-14.3-32-32.9-32zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z" />
  </svg>
);

export default SvgCompass;
