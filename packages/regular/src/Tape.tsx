import * as React from "react";
import { SVGProps } from "react";

const SvgTape = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M128 256c0-53.9 42.1-96 96-96 53 0 96 42.1 96 96 0 53-43 96-96 96-53.9 0-96-43-96-96zm96 48c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48zm328 128c13.3 0 24 10.7 24 24s-10.7 24-24 24H224C100.3 480 0 379.7 0 256S100.3 32 224 32s224 100.3 224 224c0 71.4-33.4 134.1-85.4 176H552zm-328 0c97.2 0 176-78.8 176-176S321.2 80 224 80 48 158.8 48 256s78.8 176 176 176z" />
  </svg>
);

export default SvgTape;