import * as React from "react";
import { SVGProps } from "react";

const SvgClockDesk = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="clock-desk_svg__fa-primary"
      d="m248 214.1 40.1 40.9c10.2 9.4 10.2 24.6 0 33.1-8.5 10.2-23.7 10.2-33.1 0l-48-48c-4.5-3.6-7-9.7-7-16.1V120c0-13.3 10.7-24 24-24s24 10.7 24 24v94.1zM448 464c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V224c0 123.7 100.3 224 224 224s224-100.3 224-224v240z"
    />
    <path
      d="M0 224C0 100.3 100.3 0 224 0s224 100.3 224 224-100.3 224-224 224S0 347.7 0 224zm248-104c0-13.3-10.7-24-24-24s-24 10.7-24 24v104c0 6.4 2.5 12.5 7 16.1l48 48c9.4 10.2 24.6 10.2 33.1 0 10.2-8.5 10.2-23.7 0-33.1L248 214.1V120z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgClockDesk;
