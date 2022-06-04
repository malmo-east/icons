import * as React from "react";
import { SVGProps } from "react";

const SvgNote = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path className="note_svg__fa-primary" d="M448 352 320 480V352h128z" />
    <path
      d="M400 31.1H48c-26.51 0-48 21.49-48 48v352C0 458.5 21.49 480 48 480h272V352h128V80c0-26.51-21.5-48.9-48-48.9z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgNote;
