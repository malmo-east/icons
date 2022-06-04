import * as React from "react";
import { SVGProps } from "react";

const SvgPrescription = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="m299.3 352 146.3-146.3c3.125-3.125 3.125-8.188 0-11.31s-8.188-3.125-11.31 0L288 340.7 171.3 224h4.7c61.8 0 112-50.2 112-112S237.8 0 176 0H8C3.594 0 0 3.578 0 8v304c0 4.4 3.594 8 8 8s8-3.6 8-8v-88h132.7l128 128-146.3 146.3a7.994 7.994 0 0 0 0 11.31c1.5 1.59 3.5 2.39 5.6 2.39s4.094-.781 5.656-2.344L288 363.3l146.3 146.3c1.6 1.6 3.6 2.4 5.7 2.4s4.094-.781 5.656-2.344a7.994 7.994 0 0 0 0-11.31L299.3 352zM16 16h160c52.94 0 96 43.06 96 96s-43.06 96-96 96H16V16z" />
  </svg>
);

export default SvgPrescription;
