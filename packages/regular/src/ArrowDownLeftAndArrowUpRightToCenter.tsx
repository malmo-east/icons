import * as React from "react";
import { SVGProps } from "react";

const SvgArrowDownLeftAndArrowUpRightToCenter = (
  props: SVGProps<SVGSVGElement>
) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M286.8 238.1c3 1.3 6.1 1.9 9.2 1.9h144c13.25 0 23.94-10.69 23.94-23.94S453.3 192 440 192h-86.06l135-135c9.375-9.375 9.375-24.56 0-33.94s-24.56-9.375-33.94 0L320 158.1V72c0-13.25-10.81-23.94-24.06-23.94S272 58.75 272 72v144c0 3.133.64 6.25 1.855 9.18C276.3 231 280.1 235.7 286.8 238.1zm-61.6 35.8c-3-1.3-6.1-1.9-9.2-1.9H72c-13.25 0-23.94 10.69-23.94 23.94S58.75 320 72 320h86.06l-135 135c-9.375 9.375-9.375 24.56 0 33.94s24.56 9.375 33.94 0L192 353.9V440c0 13.25 10.81 23.94 24.06 23.94S240 453.3 240 440V296c0-3.133-.64-6.25-1.855-9.18C235.7 280.1 231 276.3 225.2 273.9z" />
  </svg>
);

export default SvgArrowDownLeftAndArrowUpRightToCenter;
