import * as React from "react";
import { SVGProps } from "react";

const SvgFileArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="file-arrow-up_svg__fa-primary"
      d="M256 0v128h128L256 0zm-47.9 231c-9.375-9.375-24.56-9.375-33.94 0l-80 80c-9.375 9.375-9.375 24.56 0 33.94s24.56 9.375 33.94 0L168 305.9V424c0 13.3 10.8 24 24 24s24-10.75 24-24V305.9l39.03 39.03C259.7 349.7 265.8 352 272 352s12.28-2.344 16.97-7.031c9.375-9.375 9.375-24.56 0-33.94L208.1 231z"
    />
    <path
      d="M256 128V0H48C21.49 0 0 21.49 0 48v416c0 26.5 21.49 48 48 48h288c26.51 0 48-21.49 48-48V128H256zm32.1 216.1c-3.8 5.6-9.9 7.9-16.1 7.9s-12.28-2.344-16.97-7.031L216 305.9V424c0 13.25-10.75 24-24 24s-24-10.75-24-24V305.9l-39.03 39.03c-9.375 9.375-24.56 9.375-33.94 0s-9.375-24.56 0-33.94l80-80c9.375-9.375 24.56-9.375 33.94 0l80 80c9.33 9.41 9.33 24.61-.87 33.11z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgFileArrowUp;