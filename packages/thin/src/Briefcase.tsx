import * as React from "react";
import { SVGProps } from "react";

const SvgBriefcase = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M464 96h-80V40c0-22.06-17.9-40-40-40H168c-22.1 0-40 17.94-40 40v56H48c-26.51 0-48 21.5-48 48v288c0 26.5 21.49 48 48 48h416c26.51 0 48-21.49 48-48V144c0-26.5-21.5-48-48-48zM144 40c0-13.22 10.78-24 24-24h176c13.22 0 24 10.78 24 24v56H144V40zm352 392c0 17.64-14.36 32-32 32H48c-17.64 0-32-14.36-32-32V272h160v56c0 13.2 10.8 24 24 24h112c13.22 0 24-10.78 24-24v-56h160v160zM320 272v56c0 4.406-3.594 8-8 8H200c-4.4 0-8-3.6-8-8v-56h128zM16 256V144c0-17.64 14.36-32 32-32h416c17.64 0 32 14.36 32 32v112H16z" />
  </svg>
);

export default SvgBriefcase;
