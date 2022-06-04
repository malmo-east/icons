import * as React from "react";
import { SVGProps } from "react";

const SvgConveyorBelt = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="conveyor-belt_svg__fa-primary"
      d="M480 0h-96v128l-64-32-64 32V0h-96c-17.7 0-32 14.33-32 32v192c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32V32c0-17.67-14.3-32-32-32z"
    />
    <path
      d="M544 320H96c-54.4 0-96 41.6-96 96s41.6 96 96 96h448c54.4 0 96-41.6 96-96s-41.6-96-96-96zM128 448c-19.2 0-32-12.8-32-32s12.8-32 32-32 31.1 12.8 31.1 32-11.9 32-31.1 32zm191.1 0c-19.2 0-32-12.8-32-32s12.8-32 32-32 32 12.8 32 32-11.9 32-32 32zm192.9 0c-19.2 0-32-12.8-32-32s12.8-32 32-32 32 12.8 32 32-12.8 32-32 32zM384 128V0H256v128l64-32 64 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgConveyorBelt;
