import * as React from "react";
import { SVGProps } from "react";

const SvgMobileScreen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="mobile-screen_svg__fa-primary"
      d="M288 384H96V64h192v320z"
    />
    <path
      d="M304 0H80C53.5 0 32 21.5 32 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-64 447.1c0 9.7-7.2 16.9-16 16.9h-64.9c-7.9 0-15.1-7.2-15.1-16s7.2-16 16-16h64c8.8 0 16 7.2 16 15.1zm48-63.1H96V64h192v320z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgMobileScreen;
