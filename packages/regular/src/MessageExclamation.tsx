import * as React from "react";
import { SVGProps } from "react";

const SvgMessageExclamation = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M257.5 272c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.3-32-32-32zm0-32c13.25 0 24-10.75 24-24V104c0-13.25-10.75-24-24-24s-24 10.75-24 24v112c0 13.3 10.8 24 24 24zM447.1 0h-384C27.85 0-.9 28.75-.9 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.1c0 9.836 11.02 15.55 19.12 9.7l124.9-93.7h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM464 352c0 8.75-7.25 16-16 16H288l-80 60v-60H64c-8.75 0-16-7.25-16-16V64c0-8.75 7.25-16 16-16h384c8.75 0 16 7.25 16 16v288z" />
  </svg>
);

export default SvgMessageExclamation;