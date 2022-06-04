import * as React from "react";
import { SVGProps } from "react";

const SvgEllipsisStroke = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M464 256c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zm-48-32c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-112 32c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zm-48-32c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM48 256c0-26.5 21.49-48 48-48 26.5 0 48 21.5 48 48s-21.5 48-48 48c-26.51 0-48-21.5-48-48zm48 32c17.7 0 32-14.3 32-32s-14.3-32-32-32c-17.67 0-32 14.3-32 32s14.33 32 32 32z" />
  </svg>
);

export default SvgEllipsisStroke;
