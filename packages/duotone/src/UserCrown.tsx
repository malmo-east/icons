import * as React from "react";
import { SVGProps } from "react";

const SvgUserCrown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="user-crown_svg__fa-primary"
      d="m352 0-64 32-64-32-64 32L96 0v128h256V0zm-77.3 304H173.3C77.61 304 0 381.6 0 477.3 0 496.5 15.52 512 34.66 512H413.3c19.2 0 34.7-15.5 34.7-34.7 0-95.7-77.6-173.3-173.3-173.3z"
    />
    <path
      d="M96 144v-16h256v16c0 70.75-57.25 128-128 128S96 214.8 96 144z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgUserCrown;
