import * as React from "react";
import { SVGProps } from "react";

const SvgPrescriptionBottle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M352 0H32C14.33 0 0 14.33 0 32v64c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32V32c0-17.67-14.3-32-32-32zm16 96c0 8.822-7.178 16-16 16H32c-8.82 0-16-7.2-16-16V32c0-8.822 7.178-16 16-16h320c8.822 0 16 7.178 16 16v64zm-24 56c-4.406 0-8 3.578-8 8v280c0 30.88-25.12 56-56 56H104c-30.88 0-56-25.12-56-56v-24h112c4.406 0 8-3.578 8-8s-3.6-8-8-8H48v-80h112c4.406 0 8-3.578 8-8s-3.6-8-8-8H48v-80h112c4.406 0 8-3.578 8-8s-3.6-8-8-8H48v-48c0-4.422-3.594-8-8-8s-8 3.6-8 8v280c0 39.7 32.31 72 72 72h176c39.69 0 72-32.3 72-72V160c0-4.4-3.6-8-8-8z" />
  </svg>
);

export default SvgPrescriptionBottle;
