import * as React from "react";
import { SVGProps } from "react";

const SvgBookmarkSlash = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="bookmark-slash_svg__fa-primary"
      d="M640 487.1c0-7.119-3.153-14.16-9.192-18.89L38.82 5.111C34.41 1.673 29.19 0 24.04 0 10.19 0 0 11.3 0 24c0 7.119 3.153 14.16 9.192 18.89l591.1 463.1C605.6 510.3 610.8 512 615.1 512c14.7 0 24.9-11.4 24.9-24.9z"
    />
    <path
      d="m128 512 230.6-134.3L128 197v315zM464 0H176c-26.5 0-48 21.5-48 48v27.01l384 300.1V48c0-26.5-21.5-48-48-48z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBookmarkSlash;
