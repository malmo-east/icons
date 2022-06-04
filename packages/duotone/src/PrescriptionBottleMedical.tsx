import * as React from "react";
import { SVGProps } from "react";

const SvgPrescriptionBottleMedical = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="prescription-bottle-medical_svg__fa-primary"
      d="M272 272h-48v-48.9c0-8.801-7.199-16-16-16h-32c-8.801 0-16 7.199-16 16V272h-48c-8.8 0-16 7.2-16 16v32c0 8.799 7.199 16 16 16h48v48c0 8.799 7.199 16 16 16h32c8.801 0 16-7.201 16-16v-48h48c8.801 0 16-7.201 16-16v-32c0-8.8-7.2-16-16-16zM360 0H24C10.75 0 0 10.75 0 24v48c0 13.25 10.75 24 24 24h336c13.3 0 24-10.75 24-24V24c0-13.25-10.7-24-24-24z"
    />
    <path
      d="M32 448c0 35.2 28.8 64 64 64h192c35.2 0 64-28.8 64-64V96H32v352zm64-160c0-8.801 7.199-16 16-16h48v-48.9c0-8.801 7.199-16 16-16h32c8.801 0 16 7.199 16 16V272h48c8.8 0 16 7.2 16 16v32c0 8.799-7.199 16-16 16h-48v48c0 8.799-7.199 16-16 16h-32c-8.8 0-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16v-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPrescriptionBottleMedical;
