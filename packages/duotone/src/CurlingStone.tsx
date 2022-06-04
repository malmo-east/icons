import * as React from "react";
import { SVGProps } from "react";

const SvgCurlingStone = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="curling-stone_svg__fa-primary"
      d="M480 224H96c0-35.35 28.65-64 64-64v-32c0-53.02 42.98-96 96-96h128c17.7 0 32 14.33 32 31.1S401.7 96 384 96H256c-17.7 0-32 14.3-32 32v32h192c35.3 0 64 28.7 64 64z"
    />
    <path
      d="M0 384c0 53.02 42.98 96 96 96h384c53.02 0 96-42.98 96-96v-16H0v16zm480-160H96c-53.02 0-96 42.98-96 96v16h576v-16c0-53.9-43-96-96-96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCurlingStone;
