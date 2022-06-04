import * as React from "react";
import { SVGProps } from "react";

const SvgConveyorBeltEmpty = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      d="M544 320H96c-54.4 0-96 41.6-96 96s41.6 96 96 96h448c54.4 0 96-41.6 96-96s-41.6-96-96-96zM128 448c-19.2 0-32-12.8-32-32s12.8-32 32-32 32 12.8 32 32-12.8 32-32 32zm192 0c-19.2 0-32-12.8-32-32s12.8-32 32-32 32 12.8 32 32-12.8 32-32 32zm192 0c-19.2 0-32-12.8-32-32s12.8-32 32-32 32 12.8 32 32-12.8 32-32 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgConveyorBeltEmpty;
