import * as React from "react";
import { SVGProps } from "react";

const SvgFolderClosed = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="folder-closed_svg__fa-primary"
      d="M512 192v240c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192h512z"
    />
    <path
      d="M512 144v48H0V80c0-26.5 21.5-48 48-48h160l64 64h192c26.5 0 48 21.5 48 48z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgFolderClosed;
