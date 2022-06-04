import * as React from "react";
import { SVGProps } from "react";

const SvgCameraRetro = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="camera-retro_svg__fa-primary"
      d="M64 48c0-8.84 7.16-16 16-16h64c8.8 0 16 7.16 16 16v16H64V48zM0 416V160h512v256c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64zm256-16c53 0 96-43 96-96 0-53.9-43-96-96-96-53.9 0-96 42.1-96 96 0 53 42.1 96 96 96z"
    />
    <path
      d="M64 64h128l50.5-25.24c8.9-4.45 18.7-6.76 28.6-6.76H448c35.3 0 64 28.65 64 64v64H0v-32c0-35.35 28.65-64 64-64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCameraRetro;
