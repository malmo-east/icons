import * as React from "react";
import { SVGProps } from "react";

const SvgCompactDisc = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="compact-disc_svg__fa-primary"
      d="M256 159.1c-53.02 0-96 43-96 96s42.98 95.1 96 95.1 96-43 96-95.1-43-96-96-96zm0 128.9c-17.7 0-32-14.2-32-32s14.3-32 32-32 32 14.25 32 32-14.3 32-32 32z"
    />
    <path
      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zM96.15 241.4c-.75 8.2-7.38 14.6-15.43 14.6h-1.09c-9.08 0-16.4-8.9-15.57-17.3 8.299-92.64 82.43-166.6 175.2-174.6 9.04-.82 16.74 6.64 16.74 15.99 0 8.348-6.215 15.27-14.27 15.99C164.7 102.9 103.1 164.3 96.15 241.4zM256 351.1c-53.02 0-96-43-96-95.1s42.98-96 96-96 96 43 96 96-43 95.1-96 95.1z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCompactDisc;
