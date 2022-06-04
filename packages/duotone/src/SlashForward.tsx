import * as React from "react";
import { SVGProps } from "react";

const SvgSlashForward = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path
      d="M31.97 512a31.843 31.843 0 0 1-15.84-4.219c-15.34-8.766-20.69-28.31-11.91-43.66l256-448c8.75-15.36 28.28-20.72 43.66-11.91 15.34 8.766 20.69 28.31 11.91 43.66l-256 448C53.88 506.2 43.09 512 31.97 512z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSlashForward;