import * as React from "react";
import { SVGProps } from "react";

const SvgHouseCircleCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="house-circle-check_svg__fa-primary"
      d="M352 368c0-79.5 64.5-144 144-144s144 64.5 144 144-64.5 144-144 144-144-64.5-144-144zm211.3-20.7c6.3-6.2 6.3-16.4 0-22.6-6.2-6.3-16.4-6.3-22.6 0L480 385.4l-28.7-28.7c-6.2-6.3-16.4-6.3-22.6 0-6.3 6.2-6.3 16.4 0 22.6l40 40c6.2 6.3 16.4 6.3 22.6 0l72-72z"
    />
    <path
      d="M496 192c-91.8 0-167.2 70.3-175.3 160H256c-17.7 0-32 14.3-32 32v88c0 22.1-17.9 40-40 40h-55.9c-1.5 0-3-.1-4.5-.2-1.2.1-2.4.2-3.6.2h-16c-22.09 0-40-17.9-40-40V360c0-.9.03-1.9.09-2.8v-69.6H32.05C14.02 287.6 0 273.5 0 255.5c0-9 3.004-17 10.01-24L266.4 8.016c7-7.014 15-8.016 22-8.016s15 2.004 21.1 7.014L522.1 193.9c-8.5-1.2-17.2-1.9-26.1-1.9z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgHouseCircleCheck;
