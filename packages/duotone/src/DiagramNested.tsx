import * as React from "react";
import { SVGProps } from "react";

const SvgDiagramNested = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="diagram-nested_svg__fa-primary"
      d="M144 32c26.5 0 48 21.49 48 48v96c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V80c0-26.51 21.49-48 48-48h96zm256 256c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48v-96c0-26.5 21.5-48 48-48h96z"
    />
    <path
      d="M64 320v-96h64v96c0 17.7 14.3 32 32 32h96v64h-96c-53.9 0-96-43-96-96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgDiagramNested;
