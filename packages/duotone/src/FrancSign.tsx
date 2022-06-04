import * as React from "react";
import { SVGProps } from "react";

const SvgFrancSign = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path
      className="franc-sign_svg__fa-primary"
      d="M288 32c17.7 0 32 14.33 32 32s-14.3 32-32 32H112v96h144c17.7 0 32 14.3 32 32s-14.3 32-32 32H112v192c0 17.7-14.33 32-32 32s-32-14.3-32-32V64c0-17.67 14.33-32 32-32h208z"
    />
    <path
      d="M48 384H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h16v64zm64-64h80c17.7 0 32 14.3 32 32s-14.3 32-32 32h-80v-64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgFrancSign;
