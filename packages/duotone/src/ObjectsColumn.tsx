import * as React from "react";
import { SVGProps } from "react";

const SvgObjectsColumn = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="objects-column_svg__fa-primary"
      d="M144 32c26.5 0 48 21.49 48 48v160c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V80c0-26.51 21.49-48 48-48h96zm0 320c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48v-32c0-26.5 21.49-48 48-48h96z"
    />
    <path
      d="M400 32c26.5 0 48 21.49 48 48v32c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48V80c0-26.51 21.5-48 48-48h96zm0 192c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48h96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgObjectsColumn;
