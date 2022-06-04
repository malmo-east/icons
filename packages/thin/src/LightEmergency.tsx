import * as React from "react";
import { SVGProps } from "react";

const SvgLightEmergency = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M72 320c4.48 0 8-3.6 8-8V193c0-80.1 64.6-145 144-145s144 64.86 144 145v119c0 4.416 3.52 8 8 8s8-3.6 8-8V193c0-88.9-71.7-161-160-161S64 104.1 64 193v119c0 4.4 3.52 8 8 8zm56-152c0 4.4 3.5 8 8 8s8-3.6 8-8c0-30.88 25.28-56 56-56 4.48 0 8-3.584 8-8s-3.5-8-8-8c-39.7 0-72 32.3-72 72zm272 184H48c-26.56 0-48 21.5-48 48v32c0 26.5 21.44 48 48 48h352c26.56 0 48-21.5 48-48v-32c0-26.5-21.4-48-48-48zm32 80c0 17.66-14.4 32-32 32H48c-17.6 0-32-14.34-32-32v-32c0-17.66 14.4-32 32-32h352c17.6 0 32 14.34 32 32v32z" />
  </svg>
);

export default SvgLightEmergency;
