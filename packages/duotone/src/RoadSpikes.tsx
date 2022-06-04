import * as React from "react";
import { SVGProps } from "react";

const SvgRoadSpikes = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="road-spikes_svg__fa-primary"
      d="M0 416c0-17.7 14.33-32 32-32h576c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.67 0-32-14.3-32-32z"
    />
    <path
      d="M191.1 255.1V116.8c0-15.8 21.4-22.01 30.2-9.7l97.8 148V116.8c0-15.8 21.4-22.01 30.2-9.7l98.7 148V116.8c0-15.8 20.5-22.01 29.3-9.7l129.5 195.1c14.2 21.3-1 48.9-26.6 48.9H64V116.8c0-15.8 20.53-22.01 29.31-9.7l97.79 148z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgRoadSpikes;
