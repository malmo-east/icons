import * as React from "react";
import { SVGProps } from "react";

const SvgCassetteBetamax = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="cassette-betamax_svg__fa-primary"
      d="M528 32H48C21.49 32 0 53.49 0 80v80h576V80c0-26.51-21.5-48-48-48zM160 224c-52.95 0-96 43.05-96 96s43.05 96 96 96 96-43.05 96-96-43.9-96-96-96zm0 128c-17.62 0-32-14.38-32-32s14.38-32 32-32 32 14.38 32 32-14.4 32-32 32z"
    />
    <path
      d="M0 160v272c0 26.5 21.49 48 48 48h480c26.51 0 48-21.49 48-48V160H0zm160 256c-52.95 0-96-43.05-96-96s43.05-96 96-96 96 43.05 96 96-43.9 96-96 96zm352 0H320V224h192v192z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCassetteBetamax;
