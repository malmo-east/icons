import * as React from "react";
import { SVGProps } from "react";

const SvgWorm = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="worm_svg__fa-primary"
      d="M432 88c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-13.25 10.7-24 24-24s24 10.75 24 24z"
    />
    <path
      d="M288 96c0-53.02 42.1-96 96-96h38.4C471.9 0 512 40.12 512 89.6V360c0 83.9-68.1 152-152 152s-152-68.1-152-152v-48c0-30.9-25.1-56-56-56s-56 25.1-56 56v152c0 26.5-21.49 48-48 48S0 490.5 0 464V312c0-83.9 68.05-152 152-152 83.9 0 152 68.1 152 152v48c0 30.9 25.1 56 56 56s56-25.1 56-56V192h-32c-53.9 0-96-43-96-96zm120-32c-13.3 0-24 10.75-24 24 0 13.3 10.7 24 24 24s24-10.7 24-24c0-13.25-10.7-24-24-24z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgWorm;
