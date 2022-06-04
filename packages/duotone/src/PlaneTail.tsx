import * as React from "react";
import { SVGProps } from "react";

const SvgPlaneTail = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="plane-tail_svg__fa-primary"
      d="M544 512H299.7c-10.6 0-21.2-1.9-31.2-5.7L72.4 431.9c-24.31-9.2-40.39-32.5-40.39-58.5 0-28.2 18.8-52.9 45.94-60.3l195.35-53.9c7.6-2.1 15.5-3.2 23.4-3.2H544v256zM248 352c-13.2 0-24 10.7-24 24s10.8 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"
    />
    <path
      d="M93.49 308.8 32.8 39.02C28.29 19.02 43.51 0 64.02 0h76.88c17.3 0 33.9 7.025 46 19.47L416 256H296.7c-7.9 0-15.8 1.1-23.4 3.2L93.49 308.8z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPlaneTail;
