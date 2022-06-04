import * as React from "react";
import { SVGProps } from "react";

const SvgArrowsLeftRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="arrows-left-right_svg__fa-primary"
      d="M150.6 329.4c12.5 12.5 12.5 32.75 0 45.25-6.2 6.25-14.4 9.35-22.6 9.35s-16.38-3.125-22.62-9.375l-96-96c-12.5-12.5-12.5-32.75 0-45.25l96-96c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H256v64H109.3l41.3 41.4z"
    />
    <path
      d="M361.4 182.6c-12.5-12.5-12.5-32.75 0-45.25 6.2-6.25 14.4-9.35 22.6-9.35s16.38 3.125 22.62 9.375l96 96c12.5 12.5 12.5 32.75 0 45.25l-96 96c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L402.8 288H256v-64h146.8l-41.4-41.4z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgArrowsLeftRight;
