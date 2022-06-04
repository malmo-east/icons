import * as React from "react";
import { SVGProps } from "react";

const SvgBlinds = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="blinds_svg__fa-primary"
      d="m511.1 16 .9 32c0 8.84-7.2 16-16.9 16H128v162.1c18.6 7.5 32 25 32 45.9 0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.87 13.4-38.41 32-45.02V64H16C7.165 64 0 56.84 0 48l.003-32c0-8.838 7.163-16 15.1-16H495.1c9.7 0 16 7.162 16 16z"
    />
    <path
      d="M96 226.1V160H16L0 256h67.02c4.75-13.6 15.36-24.3 28.98-29.9zM96 64H10.71L0 128h96V64zm405.3 0H128v64h384l-10.7-64zM128 160v66.98A46.983 46.983 0 0 1 157 256h355l-16-96H128zm29 128c-6.6 19.1-24.7 32-45 32s-38.37-12.9-45-32H16L0 384h512l-16-96H157zM16 416 0 512h512l-16-96H16z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBlinds;
