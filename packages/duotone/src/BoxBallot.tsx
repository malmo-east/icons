import * as React from "react";
import { SVGProps } from "react";

const SvgBoxBallot = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="box-ballot_svg__fa-primary"
      d="M0 320v144c0 26.5 21.49 48 48 48h480c26.51 0 48-21.49 48-48V320H0zM448 24c0-13.26-10.7-24-24-24H152c-13.3 0-24 10.74-24 24v232h320V24z"
    />
    <path
      d="M576 192v127.1l-.9.9H.875L0 319.1V192c0-17.67 14.33-32 32-32h96v64H79.1c-7.94 0-15.1 7.2-15.1 15.1S71.16 256 79.1 256h416c9.7 0 16.9-7.2 16.9-16s-7.2-16-16-16h-48v-64h96c17.7 0 32 14.3 32 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBoxBallot;
