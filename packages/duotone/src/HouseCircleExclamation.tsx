import * as React from "react";
import { SVGProps } from "react";

const SvgHouseCircleExclamation = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="house-circle-exclamation_svg__fa-primary"
      d="M640 368c0 79.5-64.5 144-144 144s-144-64.5-144-144 64.5-144 144-144 144 64.5 144 144zm-144 48c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm15.1-128c0-8.8-6.3-16-16-16-7.9 0-16 7.2-16 16v80c0 8.8 8.1 16 16 16 9.7 0 16-7.2 16-16v-80z"
    />
    <path
      d="M496 192c-91.8 0-167.2 70.3-175.3 160H256c-17.7 0-32 14.3-32 32v88c0 22.1-17.9 40-40 40h-55.9c-1.5 0-3-.1-4.5-.2-1.2.1-2.4.2-3.6.2h-16c-22.09 0-40-17.9-40-40V360c0-.9.03-1.9.09-2.8v-69.6H32.05C14.02 287.6 0 273.5 0 255.5c0-9 3.004-17 10.01-24L266.4 8.016c7-7.014 15-8.016 22-8.016s15 2.004 21.1 7.014L522.1 193.9c-8.5-1.2-17.2-1.9-26.1-1.9z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgHouseCircleExclamation;
