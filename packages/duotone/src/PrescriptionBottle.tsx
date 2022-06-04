import * as React from "react";
import { SVGProps } from "react";

const SvgPrescriptionBottle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="prescription-bottle_svg__fa-primary"
      d="M360 0H24C10.75 0 0 10.75 0 24v48c0 13.25 10.75 24 24 24h336c13.3 0 24-10.75 24-24V24c0-13.25-10.7-24-24-24zM144 175.1 32 176v31.1h112c8.836 0 16-7.164 16-16s-7.2-16-16-16zm0 96.9H32v32h112c8.8 0 16-7.2 16-16s-7.2-16-16-16zm0 96H32v32h112c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
    />
    <path
      d="M32 176h112c8.801 0 16 7.199 16 16 0 8.799-7.199 16-16 16H32v64h112c8.8 0 16 7.2 16 16 0 8.799-7.199 16-16 16H32v64h112c8.8 0 16 7.2 16 16 0 8.799-7.199 16-16 16H32v48c0 35.2 28.8 64 64 64h192c35.2 0 64-28.8 64-64V96H32v80z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPrescriptionBottle;
