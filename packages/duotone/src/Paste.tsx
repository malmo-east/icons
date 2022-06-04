import * as React from "react";
import { SVGProps } from "react";

const SvgPaste = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="paste_svg__fa-primary"
      d="M272 32h-56.6C204.3 12.89 183.6 0 160 0s-44.3 12.89-55.4 32H48C21.49 32 0 53.49 0 80v320c0 26.5 21.49 48 48 48h144V176c0-44.2 35.8-80 80-80h48V80c0-26.51-21.5-48-48-48zM160 88c-13.2 0-24-10.75-24-24s10.8-24 24-24 24 10.75 24 24-10.7 24-24 24zm256 40v96h96l-96-96z"
    />
    <path
      d="M512 224v240c0 26.51-21.49 48-48 48H272c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h144v96h96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPaste;
