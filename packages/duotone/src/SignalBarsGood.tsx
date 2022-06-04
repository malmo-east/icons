import * as React from "react";
import { SVGProps } from "react";

const SvgSignalBarsGood = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="signal-bars-good_svg__fa-primary"
      d="M208 256c-26.4 0-48 21.6-48 47.1v160c0 27.3 21.6 48.9 47.1 48.9s48.9-21.6 48.9-48V303.1c0-25.5-21.6-47.1-48-47.1zm160-128c-26.4 0-48 21.6-48 47.1v288c0 27.3 21.6 48.9 47.1 48.9 27.3 0 48.9-21.6 48.9-48V175.1c0-25.5-21.6-47.1-48-47.1zM48 384c-26.4 0-48 21.6-48 47.1v32C0 490.4 21.6 512 47.1 512S96 490.4 96 464v-32c0-26.4-21.6-48-48-48z"
    />
    <path
      d="M528 0c-26.4 0-48 21.6-48 47.1v416c0 27.3 21.6 48.9 47.1 48.9s48.9-21.6 48.9-48V47.1C576 21.6 554.4 0 528 0z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSignalBarsGood;
