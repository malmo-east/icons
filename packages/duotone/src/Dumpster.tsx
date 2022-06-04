import * as React from "react";
import { SVGProps } from "react";

const SvgDumpster = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="dumpster_svg__fa-primary"
      d="M560 224h-20l4-32H32l4 32H16c-8.75 0-16 7.2-16 16v32c0 8.8 7.25 16 16 16h28l20 160v16c0 8.8 7.25 16 16 16h32c8.8 0 16-7.2 16-16v-16h320v16c0 8.75 7.25 16 16 16h32c8.75 0 16-7.25 16-16v-16l20-160h28c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16z"
    />
    <path
      d="m24.5 44.12-24 95.1C-2.001 150.2 5.625 160 16 160h97.25l25.63-128H40c-7.25 0-13.75 4.1-15.5 12.12zm551 95.98-24-95.1c-1.7-8.9-8.2-13-15.5-13h-98.88l25.62 128H560c10.4 0 17.1-9.8 15.5-19.9zM145.9 160H272V32H171.5l-25.6 128zM304 32v128h126.1L404.5 32H304z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgDumpster;
