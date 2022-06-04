import * as React from "react";
import { SVGProps } from "react";

const SvgEthernet = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M480 192h-32v-32c0-17.6-14.4-32-32-32h-32V96c0-17.6-14.4-32-32-32H160c-17.6 0-32 14.4-32 32v32H96c-17.6 0-32 14.4-32 32v32H32c-17.6 0-32 14.4-32 32v192c0 17.6 14.4 32 32 32h448c17.6 0 32-14.4 32-32V224c0-17.6-14.4-32-32-32zm-16 208h-40v-56c0-13.25-10.75-24-24-24s-24 10.75-24 24v56h-48v-56c0-13.25-10.75-24-24-24s-24 10.75-24 24v56h-48v-56c0-13.2-10.7-24-24-24s-24 10.75-24 24v56h-48v-56c0-13.2-10.7-24-24-24s-24 10.75-24 24v56H48V240h48c8.836 0 16-7.164 16-16v-48h48c8.836 0 16-7.164 16-16v-48h160v48c0 8.836 7.164 16 16 16h48v48c0 8.836 7.164 16 16 16h48v160z" />
  </svg>
);

export default SvgEthernet;
