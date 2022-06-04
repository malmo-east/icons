import * as React from "react";
import { SVGProps } from "react";

const SvgConveyorBeltBoxes = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="conveyor-belt-boxes_svg__fa-primary"
      d="M288 0H96C78.33 0 64 14.33 64 32v192c0 17.67 14.33 32 32 32h192c17.67 0 32-14.33 32-32V32c0-17.67-14.3-32-32-32zm256 64H416c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V96c0-17.67-14.3-32-32-32z"
    />
    <path
      d="M544 320H96c-54.4 0-96 41.6-96 96s41.6 96 96 96h448c54.4 0 96-41.6 96-96s-41.6-96-96-96zM128 448c-19.2 0-32-12.8-32-32s12.8-32 32-32 32 12.8 32 32-12.8 32-32 32zm192 0c-19.2 0-32-12.8-32-32s12.8-32 32-32 32 12.8 32 32-12.8 32-32 32zm192 0c-19.2 0-32-12.8-32-32s12.8-32 32-32 32 12.8 32 32-12.8 32-32 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgConveyorBeltBoxes;
