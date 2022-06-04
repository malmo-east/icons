import * as React from "react";
import { SVGProps } from "react";

const SvgVentDamper = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="vent-damper_svg__fa-primary"
      d="M512 64H128c-35.36 0-64 28.64-64 64v256c0 35.36 28.64 64 64 64h384c35.36 0 64-28.64 64-64V128c0-35.36-28.6-64-64-64zm0 320H128V128h384v256z"
    />
    <path
      d="M464 304H176c-8.8 0-16 7.2-16 16s7.168 16 16 16h288c8.832 0 16-7.168 16-16s-7.2-16-16-16zM0 192v128c0 17.66 14.34 32 32 32h32V160H32c-17.66 0-32 14.3-32 32zm464 48H176c-8.8 0-16 7.2-16 16s7.168 16 16 16h288c8.8 0 16-7.2 16-16s-7.2-16-16-16zm144-80h-32v192h32c17.66 0 32-14.34 32-32V192c0-17.7-14.3-32-32-32zm-144 16H176c-8.8 0-16 7.2-16 16s7.168 16 16 16h288c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgVentDamper;
