import * as React from "react";
import { SVGProps } from "react";

const SvgDagger = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M343.1 128h-144V8c0-4.422-2.7-8-7.1-8s-8.9 3.578-8.9 8v120h-144c-22.06 0-40 17.94-40 40l.9 24c0 4.422 3.594 8 7.1 8s8-3.578 8-8v-24c0-13.23 10.78-24 24-24h88v280c0 1.641.5 3.25 1.438 4.594l56 80C186.9 510.7 189.4 512 191.1 512s5.062-1.281 6.562-3.406l56-80A8.039 8.039 0 0 0 255.1 424V144h88c13.22 0 24 10.77 24 24v24c0 4.422 3.594 8 8 8s8-3.6 8-8v-24c0-22.1-17-40-40-40zm-104 293.5-48 68.56-48-68.56V144h96v277.5z" />
  </svg>
);

export default SvgDagger;
