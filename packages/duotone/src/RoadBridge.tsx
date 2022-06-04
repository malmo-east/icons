import * as React from "react";
import { SVGProps } from "react";

const SvgRoadBridge = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="road-bridge_svg__fa-primary"
      d="M640 32v448c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V32c0-17.67 14.3-32 32-32h256c17.7 0 32 14.33 32 32zM504 224c0-13.3-10.7-24-24-24s-24 10.7-24 24v64c0 13.3 10.7 24 24 24s24-10.7 24-24v-64zm-48 160v64c0 13.3 10.7 24 24 24s24-10.7 24-24v-64c0-13.3-10.7-24-24-24s-24 10.7-24 24zm48-320c0-13.25-10.7-24-24-24s-24 10.75-24 24v64c0 13.3 10.7 24 24 24s24-10.7 24-24V64z"
    />
    <path
      d="M288 160h-40v64h40v96c-53.9 0-96 42.1-96 96v64c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-64c0-53.9-42.98-96-96-96v-96h72v-64H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h256v64zm-168 64h80v-64h-80v64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgRoadBridge;
