import * as React from "react";
import { SVGProps } from "react";

const SvgHardDrive = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="hard-drive_svg__fa-primary"
      d="M464 288H48c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48zM320 416c-17.62 0-32-14.38-32-32s14.38-32 32-32 32 14.38 32 32-14.4 32-32 32zm96 0c-17.62 0-32-14.38-32-32s14.38-32 32-32 32 14.38 32 32-14.4 32-32 32z"
    />
    <path
      d="M464 32H48C21.5 32 0 53.5 0 80v256c0-26.5 21.5-48 48-48h416c26.5 0 48 21.5 48 48V80c0-26.5-21.5-48-48-48zM320 352c-17.62 0-32 14.38-32 32s14.38 32 32 32 32-14.38 32-32-14.4-32-32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgHardDrive;
