import * as React from "react";
import { SVGProps } from "react";

const SvgPersonCircleXmark = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="person-circle-xmark_svg__fa-primary"
      d="M576 368c0 79.5-64.5 144-144 144s-144-64.5-144-144 64.5-144 144-144 144 64.5 144 144zm-107.3-59.3L432 345.4l-36.7-36.7c-6.2-6.3-16.4-6.3-22.6 0-6.3 6.2-6.3 16.4 0 22.6l36.7 36.7-36.7 36.7c-6.3 6.2-6.3 16.4 0 22.6 6.2 6.3 16.4 6.3 22.6 0l36.7-36.7 36.7 36.7c6.2 6.3 16.4 6.3 22.6 0 6.3-6.2 6.3-16.4 0-22.6L454.6 368l36.7-36.7c6.3-6.2 6.3-16.4 0-22.6-6.2-6.3-16.4-6.3-22.6 0z"
    />
    <path
      d="M112 48c0-26.51 21.5-48 48-48s48 21.49 48 48-21.5 48-48 48-48-21.49-48-48zm8 464c-17.7 0-32-14.3-32-32V256.9l-28.57 47.6c-9.1 15.1-28.76 20-43.91 10.9-15.15-9.1-20.051-28.7-10.947-43.9l58.277-96.9C80.2 145.7 111.4 128 145.1 128h29.8c33.7 0 64.9 17.7 82.3 46.6l44.9 74.7c-17 17.6-28.7 38.4-36.6 61.5-1.9-1.9-4.4-4-4.9-6.3L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352h-16v128c0 17.7-14.3 32-32 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPersonCircleXmark;
