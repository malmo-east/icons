import * as React from "react";
import { SVGProps } from "react";

const SvgInbox = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M447 56.25C443.5 42 430.7 31.1 416 31.1H96c-14.69 0-27.47 10-31.03 24.25L3.715 304.9A127.86 127.86 0 0 0 0 335.5v96.47c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V335.5c0-10.32-1.247-20.6-3.715-30.61L447 56.25zM352 352H160l-32-64H72.97L121 96h270l48.03 192H384l-32 64z" />
  </svg>
);

export default SvgInbox;
