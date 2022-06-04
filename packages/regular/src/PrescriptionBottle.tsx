import * as React from "react";
import { SVGProps } from "react";

const SvgPrescriptionBottle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M352 0H32C14.33 0 0 14.33 0 32v64c0 17.67 14.33 32 32 32v328c0 30.9 25.13 56 56 56h208c30.88 0 56-25.12 56-56V128c17.67 0 32-14.33 32-32V32c0-17.67-14.3-32-32-32zM48 48h288v32H48V48zm256 408c0 4.406-3.594 8-8 8H88c-4.406 0-8-3.594-8-8v-40h56c13.3 0 24-10.7 24-24s-10.7-24-24-24H80v-48h56c13.3 0 24-10.7 24-24s-10.7-24-24-24H80v-48h56c13.3 0 24-10.7 24-24s-10.7-24-24-24H80v-48h224v328z" />
  </svg>
);

export default SvgPrescriptionBottle;