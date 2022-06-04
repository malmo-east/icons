import * as React from "react";
import { SVGProps } from "react";

const SvgManatSign = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="manat-sign_svg__fa-primary"
      d="M0 288C0 181.1 85.96 96 192 96c106 0 192 85.1 192 192v160c0 17.7-14.3 32-32 32s-32-14.3-32-32V288c0-70.7-57.3-128-128-128S64 217.3 64 288v160c0 17.7-14.33 32-32 32S0 465.7 0 448V288z"
    />
    <path
      d="M224 64v34.65C213.6 96.91 202.9 96 192 96c-10.9 0-21.6.91-32 2.65V64c0-17.67 14.3-32 32-32s32 14.33 32 32zm0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32V164c10.2-2.6 20.1-4 32-4 11 0 21.8 1.4 32 4v284z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgManatSign;
