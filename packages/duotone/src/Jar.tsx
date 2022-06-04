import * as React from "react";
import { SVGProps } from "react";

const SvgJar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path
      className="jar_svg__fa-primary"
      d="M256 0c17.7 0 32 14.33 32 32s-14.3 32-32 32H64c-17.67 0-32-14.33-32-32S46.33 0 64 0h192zm0 384H64V224h192v160z"
    />
    <path
      d="M256 96c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V160c0-35.3 28.65-64 64-64h192zm0 128H64v160h192V224z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgJar;
