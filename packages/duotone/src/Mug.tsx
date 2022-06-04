import * as React from "react";
import { SVGProps } from "react";

const SvgMug = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="mug_svg__fa-primary"
      d="M416 352c0 53-43 96-96 96H128c-53 0-96-43-96-96V88c0-15.02 12.42-24 24-24h360v288z"
    />
    <path
      d="M416 128V64h32c70.75 0 128 57.25 128 128s-57.25 128-128 128h-32v-64h32c35.38 0 64-28.62 64-64s-28.62-64-64-64h-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgMug;
