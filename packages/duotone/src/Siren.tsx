import * as React from "react";
import { SVGProps } from "react";

const SvgSiren = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="siren_svg__fa-primary"
      d="M424 352H24c-13.25 0-24 10.7-24 24v79.1c0 13.25 10.75 24 24 24h400c13.25 0 24-10.75 24-24V376c0-13.3-10.7-24-24-24z"
    />
    <path
      d="M128.3 166.1c.25-2.125 1.375-4.125 3-5.375 1.75-1.25 3.875-1.875 6-1.5l15.8 2.975c2 .25 4 1.375 5.25 3 1.25.9 1.95 3.9 1.65 6L135.9 352H400l-25-200c-4-31.1-31.25-55.1-63.5-55.1h-175c-32.25 0-59.5 24-63.5 55.1L48 352h55.5l24.8-185.9z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSiren;
