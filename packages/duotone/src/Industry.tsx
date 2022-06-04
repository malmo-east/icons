import * as React from "react";
import { SVGProps } from "react";

const SvgIndustry = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="industry_svg__fa-primary"
      d="M372.8 116.1c6.6 11.5 2.6 26.2-8.9 32.7L160 265.4v-55.3l180.1-102.9c11.5-6.6 26.2-2.6 32.7 8.9zm192 0c6.6 11.5 2.6 26.2-8.9 32.7L352 265.4v-55.3l180.1-102.9c11.5-6.6 26.2-2.6 32.7 8.9z"
    />
    <path
      d="M128 32c17.7 0 32 14.33 32 32v201.4l192-109.8v109.8l192-109.8V432c0 26.5-21.5 48-48 48H80c-26.51 0-48-21.5-48-48V64c0-17.67 14.33-32 32-32h64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgIndustry;
