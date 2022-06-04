import * as React from "react";
import { SVGProps } from "react";

const SvgFileSlash = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="file-slash_svg__fa-primary"
      d="M639.1 487.1c0-7.119-3.153-14.16-9.191-18.89L38.82 5.11C34.41 1.672 29.19 0 24.04 0 10.19 0 0 11.3 0 23.1c0 7.119 3.153 14.16 9.192 18.89l591.1 463.1C605.6 510.3 610.8 512 615.1 512c14.7 0 24-11.4 24-24.9z"
    />
    <path
      d="M352 127.1V0H176c-26.5 0-48 21.49-48 48l.002 27.01 383.1 300.1L512 160H384.9c-18.6-.9-32.9-14.3-32.9-32.9zM384 0v128h128L384 0zM128 464c0 26.5 21.5 48 48 48h288c16.36 0 30.78-8.221 39.44-20.72L128 197v267z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgFileSlash;
