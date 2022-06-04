import * as React from "react";
import { SVGProps } from "react";

const SvgBoxBallot = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M128 256h320c8.836 0 16-7.164 16-16V32c0-17.67-14.33-32-32-32H144c-17.67 0-32 14.33-32 32v208c0 8.8 7.2 16 16 16zm0-224c0-8.822 7.178-16 16-16h288c8.8 0 16 7.18 16 16v208H128V32zm400 128h-24a8 8 0 0 0 0 16h24c17.67 0 32 14.33 32 32v112H16V208c0-17.67 14.33-32 32-32h24a8 8 0 0 0 0-16H48c-26.51 0-48 21.5-48 48v272c0 17.67 14.33 32 32 32h512c17.67 0 32-14.33 32-32V208c0-26.5-21.5-48-48-48zm32 320c0 8.822-7.178 16-16 16H32c-8.822 0-16-7.178-16-16V336h544v144z" />
  </svg>
);

export default SvgBoxBallot;
