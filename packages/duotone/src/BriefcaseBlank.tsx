import * as React from "react";
import { SVGProps } from "react";

const SvgBriefcaseBlank = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="briefcase-blank_svg__fa-primary"
      d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h416c26.5 0 48 21.5 48 48z"
    />
    <path
      d="M176 96h-48V48c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48v48h-48V48H176v48z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBriefcaseBlank;
