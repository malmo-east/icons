import * as React from "react";
import { SVGProps } from "react";

const SvgCamera = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="camera_svg__fa-primary"
      d="M194.6 32h122.8c20.7 0 39 13.22 45.5 32.82L373.3 96H448c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V160c0-35.3 28.65-64 64-64h74.7l10.4-31.18C155.6 45.22 173.9 32 194.6 32zM256 384c53 0 96-43 96-96 0-53.9-43-96-96-96-53.9 0-96 42.1-96 96 0 53 42.1 96 96 96z"
    />
    <path
      d="M352 288c0 53-43 96-96 96-53.9 0-96-43-96-96 0-53.9 42.1-96 96-96 53 0 96 42.1 96 96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCamera;
