import * as React from "react";
import { SVGProps } from "react";

const SvgCommand = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="command_svg__fa-primary"
      d="M352 288H192v64h64v32c0 52.94 43.06 96 96 96s96-43.06 96-96-43.1-96-96-96zm0 128c-17.66 0-32-14.34-32-32v-32h32c17.66 0 32 14.34 32 32s-14.3 32-32 32zm-96-256h-64v-32c0-52.94-43.06-96-96-96S0 75.06 0 128s43.06 96 96 96h160v-64zm-128 0H96c-17.66 0-32-14.3-32-32s14.34-32 32-32 32 14.34 32 32v32z"
    />
    <path
      d="M128 288H96c-52.94 0-96 43.06-96 96s43.06 96 96 96 96-43.06 96-96V224h-64v64zm0 96c0 17.66-14.34 32-32 32s-32-14.34-32-32 14.34-32 32-32h32v32zM352 32c-52.94 0-96 43.06-96 96v160h64v-64h32c52.94 0 96-43.06 96-96s-43.1-96-96-96zm0 128h-32v-32c0-17.66 14.34-32 32-32s32 14.34 32 32-14.3 32-32 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCommand;
