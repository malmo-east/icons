import * as React from "react";
import { SVGProps } from "react";

const SvgDesktop = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="desktop_svg__fa-primary"
      d="M424 464h-72l-16-48h-96l-16 48h-72c-13.2 0-24 10.8-24 24s10.8 24 24 24h272c13.25 0 24-10.75 24-24s-10.7-24-24-24zM64 64v224h448V64H64z"
    />
    <path
      d="M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 288H64V64h448v224z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgDesktop;
