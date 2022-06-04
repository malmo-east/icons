import * as React from "react";
import { SVGProps } from "react";

const SvgCircleStop = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="circle-stop_svg__fa-primary"
      d="M352 328c0 13.2-10.8 24-24 24H184c-13.2 0-24-10.8-24-24V184c0-13.2 10.8-24 24-24h144c13.2 0 24 10.8 24 24v144z"
    />
    <path
      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm96 328c0 13.2-10.8 24-24 24H184c-13.2 0-24-10.8-24-24V184c0-13.2 10.8-24 24-24h144c13.2 0 24 10.8 24 24v144z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCircleStop;
