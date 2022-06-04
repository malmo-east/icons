import * as React from "react";
import { SVGProps } from "react";

const SvgGem = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m510.4 195.2-119.1-160c-2.4-2.01-4.8-3.2-7.3-3.2H127.1c-1.6 0-4 1.19-5.5 3.2L2.5 195.2c-3.213 3.1-2.994 7.3-.4 10.2l247.1 272c2.4 1.6 4.6 2.6 6.8 2.6s4.406-.953 5.906-2.609l247.1-272C512.5 202.5 512.7 198.3 510.4 195.2zM383.8 53.06 487.1 192H271.8l112-138.94zM256 187.2 144.7 48h222.7L256 187.2zM128.2 53.06 239.4 192H24.01L128.2 53.06zM256 460.1 26.13 208h459.7L256 460.1z" />
  </svg>
);

export default SvgGem;
