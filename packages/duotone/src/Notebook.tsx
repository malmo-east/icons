import * as React from "react";
import { SVGProps } from "react";

const SvgNotebook = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="notebook_svg__fa-primary"
      d="M192 0v512h-64c-35.35 0-64-28.65-64-64v-40H24c-13.25 0-24-10.7-24-24 0-13.26 10.75-24 24-24h40v-80H24c-13.25 0-24-10.7-24-24 0-13.26 10.75-24 24-24h40v-80H24c-13.25 0-24-10.7-24-24 0-13.26 10.75-24 24-24h40V64c0-35.35 28.65-64 64-64h64z"
    />
    <path
      d="M416 0H192v512h224c35.35 0 64-28.65 64-64V64c0-35.35-28.7-64-64-64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgNotebook;
