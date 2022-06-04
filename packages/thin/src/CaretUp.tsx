import * as React from "react";
import { SVGProps } from "react";

const SvgCaretUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="m313.4 279.5-136-144c-4.5-4.8-10.8-7.5-17.4-7.5s-12.91 2.721-17.45 7.52l-136 144C2.26 284.1 0 289.1 0 296c0 13.2 10.67 24 24 24h272c13.3 0 24-10.8 24-24 0-6.9-2.3-11.9-6.6-16.5zM296 304H24c-4.41 0-8-3.6-8-8 0-2.055.775-4.006 2.184-5.498l136-144C155.7 144.9 157.8 144 160 144s4.312.914 5.816 2.506l136 144C303.2 291.1 304 293.9 304 296c0 4.4-3.6 8-8 8z" />
  </svg>
);

export default SvgCaretUp;
