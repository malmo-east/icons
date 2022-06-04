import * as React from "react";
import { SVGProps } from "react";

const SvgInboxFull = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="inbox-full_svg__fa-primary"
      d="M447 56.25C443.5 42 430.7 32 416 32H96c-14.69 0-27.47 10-31.03 24.25L3.72 304.95A126.896 126.896 0 0 0 0 335.5V432c0 26.5 21.49 48 48 48h416c26.51 0 48-21.49 48-48v-96.47c0-10.32-1.247-20.6-3.715-30.61L447 56.25zM352 352H160l-32-64H72.97L121 96h270l48.03 192H384l-32 64z"
    />
    <path
      d="M391 96H121L72.97 288H128l32 64h192l32-64h55.03L391 96zm-215 48h160c8.8 0 16 7.2 16 16 0 8.836-7.164 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zm192 112H144c-8.8 0-16-7.2-16-16s7.2-16 16-16h224c8.8 0 16 7.2 16 16s-7.2 16-16 16z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgInboxFull;
