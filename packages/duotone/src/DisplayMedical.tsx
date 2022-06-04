import * as React from "react";
import { SVGProps } from "react";

const SvgDisplayMedical = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="display-medical_svg__fa-primary"
      d="M424 464h-72l-16-48h-96l-16 48h-72c-13.2 0-24 10.8-24 24s10.8 24 24 24h272c13.25 0 24-10.75 24-24s-10.7-24-24-24zM64 64v288h448V64H64zm320 160c0 8.799-7.199 15.1-16 15.1h-48v48c0 9.7-7.2 16.9-16 16.9h-32c-8.8 0-16-7.2-16-16.9v-48h-48c-8.8 0-16-6.3-16-15.1v-32.9c0-7.9 7.2-15.1 16-15.1h48v-48c0-8.801 7.199-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.801 0 16 7.198 16 15.1V224z"
    />
    <path
      d="M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgDisplayMedical;
