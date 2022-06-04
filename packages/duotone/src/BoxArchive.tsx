import * as React from "react";
import { SVGProps } from "react";

const SvgBoxArchive = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="box-archive_svg__fa-primary"
      d="M512 64v48c0 8.8-7.2 16-16 16H16c-8.812 0-16-7.2-16-16V64c0-17.69 14.31-32 32-32h448c17.7 0 32 14.31 32 32z"
    />
    <path
      d="M32 432c0 26.5 21.49 48 48 48h352c26.51 0 48-21.49 48-48V128H32v304zm128-224c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16v-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBoxArchive;
