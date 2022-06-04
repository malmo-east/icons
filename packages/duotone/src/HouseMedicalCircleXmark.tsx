import * as React from "react";
import { SVGProps } from "react";

const SvgHouseMedicalCircleXmark = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="house-medical-circle-xmark_svg__fa-primary"
      d="M640 368c0 79.5-64.5 144-144 144s-144-64.5-144-144 64.5-144 144-144 144 64.5 144 144zm-107.3-59.3L496 345.4l-36.7-36.7c-6.2-6.3-16.4-6.3-22.6 0-6.3 6.2-6.3 16.4 0 22.6l36.7 36.7-36.7 36.7c-6.3 6.2-6.3 16.4 0 22.6 6.2 6.3 16.4 6.3 22.6 0l36.7-36.7 36.7 36.7c6.2 6.3 16.4 6.3 22.6 0 6.3-6.2 6.3-16.4 0-22.6L518.6 368l36.7-36.7c6.3-6.2 6.3-16.4 0-22.6-6.2-6.3-16.4-6.3-22.6 0z"
    />
    <path
      d="M496 192c-42.4 0-81.3 15-111.7 40H328v-56c0-8.8-7.2-16-16-16h-48c-8.8 0-16 7.2-16 16v56h-56c-8.8 0-16 7.2-16 16v48c0 8.8 7.2 16 16 16h56v56c0 8.8 7.2 16 16 16h48c3.1 0 6-.9 8.5-2.5 4.1 54 32.5 101.1 74.3 130.5H128.1c-35.35 0-64.01-28.7-64.01-64V287.6H32.05C14.02 287.6 0 273.5 0 255.5c0-9 3.004-17 10.01-24L266.4 8.016c7-7.014 15-8.016 22-8.016s15 2.004 21.1 7.014L522.1 193.9c-8.5-1.2-17.2-1.9-26.1-1.9z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgHouseMedicalCircleXmark;