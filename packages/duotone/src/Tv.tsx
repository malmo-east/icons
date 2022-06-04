import * as React from "react";
import { SVGProps } from "react";

const SvgTv = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path className="tv_svg__fa-primary" d="M576 352H64V64h512v288z" />
    <path
      d="M512 448H127.1c-16.8 0-31.1 14.3-31.1 31.1s14.3 32.9 31.1 32.9h384c18.6 0 32.9-14.3 32.9-32s-14.3-32-32-32zM592 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h544c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h512v288z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTv;