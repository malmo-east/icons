import * as React from "react";
import { SVGProps } from "react";

const SvgCircleInfo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="circle-info_svg__fa-primary"
      d="M256 192c17.67 0 32-14.33 32-32s-14.33-32-32-32-32 14.3-32 32 14.3 32 32 32zm40 144h-16v-88c0-13.2-10.7-24-24-24h-32c-13.2 0-24 10.8-24 24s10.8 24 24 24h8v64h-16c-13.2 0-24 10.8-24 24s10.8 24 24 24h80c13.25 0 24-10.75 24-24s-10.7-24-24-24z"
    />
    <path
      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 128c17.67 0 32 14.33 32 32s-14.33 32-32 32-32-14.3-32-32 14.3-32 32-32zm40 256h-80c-13.2 0-24-10.7-24-24s10.75-24 24-24h16v-64h-8c-13.25 0-24-10.75-24-24s10.8-24 24-24h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24s-10.7 24-24 24z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCircleInfo;
