import * as React from "react";
import { SVGProps } from "react";

const SvgPeoplePantsSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="people-pants-simple_svg__fa-primary"
      d="M128 160H64c-35.35 0-64 28.7-64 64v96c0 17.67 14.33 32 32 32v128c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V352c17.67 0 32-14.33 32-32v-96c0-35.3-28.7-64-64-64zm256 0h-64c-35.35 0-64 28.65-64 64v96c0 17.67 14.33 32 32 32v128c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V352c17.67 0 32-14.33 32-32v-96c0-35.3-28.7-64-64-64z"
    />
    <path
      d="M96 0C60.63 0 32 28.62 32 64s28.62 64 64 64 64-28.62 64-64S131.4 0 96 0zm256 0c-35.38 0-64 28.62-64 64s28.62 64 64 64 64-28.62 64-64-28.6-64-64-64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPeoplePantsSimple;
