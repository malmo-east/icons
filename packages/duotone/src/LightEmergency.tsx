import * as React from "react";
import { SVGProps } from "react";

const SvgLightEmergency = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="light-emergency_svg__fa-primary"
      d="M448 416v32c0 17.66-14.4 32-32 32H32c-17.6 0-32-14.34-32-32v-32c0-17.66 14.4-32 32-32h384c17.6 0 32 14.3 32 32z"
    />
    <path
      d="M224 32c-88.3 0-160 71.6-160 160v160h320V192c0-88.4-71.7-160-160-160zm0 80c-44.2 0-80 35.9-80 80 0 8.832-7.039 16-16 16s-16-7.2-16-16c0-61.76 50.24-112 112-112 8.961 0 16 7.168 16 16s-7.9 16-16 16z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgLightEmergency;
