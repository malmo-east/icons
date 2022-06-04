import * as React from "react";
import { SVGProps } from "react";

const SvgNoteMedical = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="note-medical_svg__fa-primary"
      d="M320 352v128l128-128H320zm0-152c0-4.4-3.6-8-8-8h-56v-56c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v56h-56c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8l56-.9V312c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-56.9l56 .9c4.4 0 8-3.6 8-8v-48z"
    />
    <path
      d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.5 21.49 48 48 48h272V352h128V80c0-26.51-21.5-48-48-48zm-80 216c0 4.4-3.6 8-8 8l-56-.9V312c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56.9l-56 .9c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8v48z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgNoteMedical;
