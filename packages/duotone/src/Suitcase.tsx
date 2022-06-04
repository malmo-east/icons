import * as React from "react";
import { SVGProps } from "react";

const SvgSuitcase = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="suitcase_svg__fa-primary"
      d="M0 144v288c0 25.6 22.41 48 48 48h16V96H48c-25.59 0-48 22.4-48 48zm464-48h-16v384h16c25.59 0 48-22.41 48-48V144c0-25.6-22.4-48-48-48zM336 0H176c-25.6 0-48 22.41-48 48v432h256V48c0-25.59-22.4-48-48-48zm0 96H176V48h160v48z"
    />
    <path
      d="M64 480h64V96H64v384zM384 96v384h64V96h-64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSuitcase;
