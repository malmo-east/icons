import * as React from "react";
import { SVGProps } from "react";

const SvgSendBackward = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="send-backward_svg__fa-primary"
      d="M0 64C0 28.65 28.65 0 64 0h224c35.3 0 64 28.65 64 64v64H224c-53.9 0-96 42.1-96 96v128H64c-35.35 0-64-28.7-64-64V64z"
    />
    <path
      d="M160 224c0-35.3 28.7-64 64-64h224c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V224zm64 0v224h224V224H224z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSendBackward;
