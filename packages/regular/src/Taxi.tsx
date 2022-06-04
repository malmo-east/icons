import * as React from "react";
import { SVGProps } from "react";

const SvgTaxi = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M176 320c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm224 0c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zM352 0c17.7 0 32 14.33 32 32v32.17c35.2 2.15 65.9 25.17 77.7 58.73l34.2 97.9c28.7 16.6 48.1 47.6 48.1 82.3V488c0 13.3-10.7 24-24 24s-24-10.7-24-24v-56H80v56c0 13.3-10.75 24-24 24s-24-10.7-24-24V303.1c0-34.7 19.35-65.7 48.1-82.3l34.2-97.9c11.8-33.56 42.5-56.58 77.7-58.73V32c0-17.67 14.3-32 32-32h128zM197.4 112c-17 0-32.1 10.7-37.7 26.8L135.4 208h305.2l-24.3-69.2a39.85 39.85 0 0 0-37.7-26.8H197.4zM80 304v80h416v-80c0-26.5-21.5-48-48-48H128c-26.5 0-48 21.5-48 48z" />
  </svg>
);

export default SvgTaxi;
