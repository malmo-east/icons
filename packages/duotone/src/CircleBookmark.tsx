import * as React from "react";
import { SVGProps } from "react";

const SvgCircleBookmark = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="circle-bookmark_svg__fa-primary"
      d="m352 384-96-64-96 64V160c0-17.67 14.33-32 32-32h128c17.67 0 32 14.33 32 32v224z"
    />
    <path
      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm96 384-96-64-96 64V160c0-17.67 14.33-32 32-32h128c17.67 0 32 14.33 32 32v224z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCircleBookmark;
