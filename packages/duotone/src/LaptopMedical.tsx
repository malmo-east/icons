import * as React from "react";
import { SVGProps } from "react";

const SvgLaptopMedical = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="laptop-medical_svg__fa-primary"
      d="M128 96v256h384V96H128zm288 144c0 8.8-7.2 15.1-16 15.1h-48v48c0 9.7-7.2 16.9-16 16.9h-32c-8.8 0-16-7.2-16-16.9v-48h-48c-8.8 0-16-6.3-16-15.1v-32.9c0-7.9 7.2-15.1 16-15.1h48v-48c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 15.1V240z"
    />
    <path
      d="M128 96h384v256h64V80c0-26.37-21.6-48-48-48H112c-26.37 0-48 21.63-48 48v272h64V96zm496 288H16c-8.75 0-16 7.3-16 16v16c0 35.25 28.75 64 64 64h512c35.25 0 64-28.75 64-64v-16c0-8.7-7.2-16-16-16z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgLaptopMedical;
