import * as React from "react";
import { SVGProps } from "react";

const SvgNotesMedical = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="notes-medical_svg__fa-primary"
      d="M376 256h-56v-56c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v56h-56c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h56v56c0 4.375 3.625 8 8 8h48c4.375 0 8-3.625 8-8v-56h56c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM0 360V120C0 53.83 53.83 0 120 0h240c13.3 0 24 10.75 24 24s-10.7 24-24 24H120c-39.7 0-72 32.3-72 72v240c0 13.3-10.75 24-24 24S0 373.3 0 360z"
    />
    <path
      d="M432 96H144c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h240l96-96V144c0-26.5-21.5-48-48-48zm-48 216c0 4.4-3.6 8-8 8h-56v56c0 4.375-3.625 8-8 8h-48c-4.4 0-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8v48z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgNotesMedical;
