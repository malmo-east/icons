import * as React from "react";
import { SVGProps } from "react";

const SvgLocationExclamation = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="location-exclamation_svg__fa-primary"
      d="M216 232c0 13.3-10.7 24-24 24s-24-10.7-24-24V120c0-13.3 10.7-24 24-24s24 10.7 24 24v112zm-56 88c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32z"
    />
    <path
      d="M168.3 499.2C116.1 435 0 279.4 0 192 0 85.96 85.96 0 192 0c106 0 192 85.96 192 192 0 87.4-117 243-168.3 307.2-12.3 15.3-35.1 15.3-47.4 0zM168 120v112c0 13.3 10.7 24 24 24s24-10.7 24-24V120c0-13.3-10.7-24-24-24s-24 10.7-24 24zm24 168c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgLocationExclamation;
