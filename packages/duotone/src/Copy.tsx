import * as React from "react";
import { SVGProps } from "react";

const SvgCopy = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="copy_svg__fa-primary"
      d="M192 352V128H48c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h192c26.51 0 48-21.49 48-48v-48h-32c-35.3 0-64-28.7-64-64zM416 0v96h96L416 0z"
    />
    <path
      d="M512 96v240c0 26.51-21.49 48-48 48H272c-26.51 0-48-21.49-48-48V48c0-26.51 21.49-48 48-48h144v96h96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCopy;
