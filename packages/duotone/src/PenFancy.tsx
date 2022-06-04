import * as React from "react";
import { SVGProps } from "react";

const SvgPenFancy = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="pen-fancy_svg__fa-primary"
      d="M373.5 27.11C388.5 9.885 410.2 0 433 0c43.6 0 79 35.36 79 78.98 0 22.82-9.9 44.52-27.1 59.52L255.1 337.9l-81-81.9L373.5 27.11z"
    />
    <path
      d="m255.1 337.9-21.4 96.4c-2.6 11.5-11.3 20.5-22.5 22.8L24.35 510.3l95.35-95.4c2.7.7 5.4 1.1 8.3 1.1 17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32c0 2.9.38 5.6 1.08 8.3L1.724 487.7 54.03 300.8c3.16-11.2 12.22-19.9 23.62-22.5L174.1 256l81 81.9zM512 78.61v.73-.73z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPenFancy;
