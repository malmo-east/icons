import * as React from "react";
import { SVGProps } from "react";

const SvgFolders = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="folders_svg__fa-primary"
      d="M488 480H152c-66.17 0-120-53.8-120-120V120c0-13.2 10.75-24 24-24s24 10.8 24 24v240c0 39.7 32.3 72 72 72h336c13.25 0 24 10.75 24 24s-10.7 24-24 24z"
    />
    <path
      d="M608 144v192c0 26.5-21.5 48-48 48H176c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h128l64 64h192c26.5 0 48 21.5 48 48z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgFolders;
