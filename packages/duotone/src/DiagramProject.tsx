import * as React from "react";
import { SVGProps } from "react";

const SvgDiagramProject = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="diagram-project_svg__fa-primary"
      d="M0 80c0-26.51 21.49-48 48-48h96c26.5 0 48 21.49 48 48v96c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V80zm224 256c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48v-96zM528 32c26.5 0 48 21.49 48 48v96c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48V80c0-26.51 21.5-48 48-48h96z"
    />
    <path
      d="M191.7 180.1 272 288c-24.8 0-45.2 18.8-47.7 43L144 224c24.8 0 45.2-18.8 47.7-43.9zM192 96h192v64H192V96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgDiagramProject;
