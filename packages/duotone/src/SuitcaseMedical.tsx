import * as React from "react";
import { SVGProps } from "react";

const SvgSuitcaseMedical = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="suitcase-medical_svg__fa-primary"
      d="M0 144v288c0 25.6 22.41 48 48 48h16V96H48c-25.59 0-48 22.4-48 48zM336 0H176c-25.6 0-48 22.41-48 48v432h256V48c0-25.59-22.4-48-48-48zM176 48h160v48H176V48zm176 264c0 4.4-3.6 8-8 8h-56v56c0 4.375-3.625 8-8 8h-48c-4.4 0-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8v48zM464 96h-16v384h16c25.59 0 48-22.41 48-48V144c0-25.6-22.4-48-48-48z"
    />
    <path
      d="M64 480h64V96H64v384zM384 96v384h64V96h-64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSuitcaseMedical;
