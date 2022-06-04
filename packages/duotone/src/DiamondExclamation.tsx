import * as React from "react";
import { SVGProps } from "react";

const SvgDiamondExclamation = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="diamond-exclamation_svg__fa-primary"
      d="M256 287.1c13.25 0 24-10.75 24-24v-112c0-13.25-10.75-24-24-24s-24 10.75-24 24v112c0 14.1 10.8 24 24 24zm0 32c-17.66 0-32 14.34-32 32s14.34 32 32 32 32-14.34 32-32-14.3-32-32-32z"
    />
    <path
      d="M497.7 222.6 289.5 13.5c-19.01-18.02-50.05-18.02-68.06 0L14.27 222.6c-19.04 17.98-19.04 49.03 0 67.01l208.2 208.1c18.02 19.04 49.05 19.04 67.07 0l208.2-208.1c19.06-18.01 19.06-49.01-.04-67.01zM232 151.1c0-13.25 10.75-24 24-24s24 10.75 24 24v112c0 13.25-10.75 24-24 24s-24-10.75-24-24v-112zm24 232c-17.66 0-32-14.34-32-32s14.34-32 32-32 32 14.34 32 32-14.3 32-32 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgDiamondExclamation;
