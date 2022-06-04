import * as React from "react";
import { SVGProps } from "react";

const SvgBackpack = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="backpack_svg__fa-primary"
      d="M320 80H128C57.25 80 0 137.25 0 208v240c0 35.38 28.62 64 64 64h32V320c0-17.62 14.38-32 32-32h192c17.62 0 32 14.38 32 32v192h32c35.38 0 64-28.62 64-64V208c0-70.7-57.2-128-128-128zm0 120c0 4.375-3.625 8-8 8H136c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h176c4.4 0 8 3.6 8 8v16z"
    />
    <path
      d="M96 384v128h256V384H96zm80-328c0-4.375 3.625-8 8-8h80c4.375 0 8 3.625 8 8v24h48V56c0-30.88-25.1-56-56-56h-80c-30.9 0-56 25.12-56 56v24h48V56z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBackpack;
