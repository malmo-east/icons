import * as React from "react";
import { SVGProps } from "react";

const SvgCodeSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M19.56 256 205.5 434.2c3.2 3.1 3.3 8.1.3 11.3-3.1 3.2-8.1 3.3-11.3.3L2.465 261.8A8.006 8.006 0 0 1 0 256c0-2.2.89-4.3 2.465-5.8L194.5 66.22c3.2-3.05 8.2-2.95 11.3.24 3 3.19 2.9 8.26-.3 11.32L19.56 256zM370.5 77.78c-3.2-3.06-3.3-8.12-.3-11.31 3.1-3.19 8.1-3.3 11.3-.25l192 183.98c1.6 1.5 2.5 3.6 2.5 5.8 0 2.2-.9 4.3-2.5 5.8l-192 184c-3.2 3-8.2 2.9-11.3-.3-3-3.2-2.9-8.2.3-11.3L556.4 256 370.5 77.78z" />
  </svg>
);

export default SvgCodeSimple;
