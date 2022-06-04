import * as React from "react";
import { SVGProps } from "react";

const SvgUtilityPole = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M496 32h-16c-8.836 0-16 7.162-16 16v32h-32V48c0-8.84-7.2-16-16-16h-16c-8.8 0-16 7.16-16 16v32H280V16c0-8.838-7.164-16-16-16h-16c-8.836 0-16 7.162-16 16v64H128V48c0-8.84-7.2-16-16-16H96c-8.84 0-16 7.16-16 16v32H48V48c0-8.84-7.16-16-16-16H16C7.164 32 0 39.16 0 48v48c0 17.67 14.33 32 32 32h36.73L232 236.8V512h48V236.8L443.3 128H480c17.67 0 32-14.33 32-32V48c0-8.84-7.2-16-16-16zm-340.7 96H232v51.16L155.3 128zm124.7 0h76.73L280 179.2V128z" />
  </svg>
);

export default SvgUtilityPole;