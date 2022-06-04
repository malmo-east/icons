import * as React from "react";
import { SVGProps } from "react";

const SvgCircleJ = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="circle-j_svg__fa-primary"
      d="M312 128c-13.2 0-24 10.8-24 24v138.7c0 25-21.5 45.3-48 45.3s-48-20.3-48-45.3V280c0-13.2-10.7-24-24-24s-24 10.8-24 24v10.67c0 51.43 43.1 93.33 96 93.33s96-41.86 96-93.33V152c0-13.2-10.7-24-24-24z"
    />
    <path
      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm80 290.7c0 51.4-43.1 93.3-96 93.3s-96-41.86-96-93.33V280c0-13.2 10.8-24 24-24s24 10.8 24 24v10.67c0 25.03 21.5 45.33 48 45.33s48-20.3 48-45.3V152c0-13.2 10.8-24 24-24s24 10.75 24 24v138.7z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCircleJ;
