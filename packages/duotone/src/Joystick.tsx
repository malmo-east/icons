import * as React from "react";
import { SVGProps } from "react";

const SvgJoystick = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="joystick_svg__fa-primary"
      d="M416 352H32c-17.62 0-32 14.38-32 32v96c0 17.62 14.38 32 32 32h384c17.62 0 32-14.38 32-32v-96c0-17.6-14.4-32-32-32zM224 224c61.86 0 112-50.15 112-112S285.9 0 224 0 111.1 50.14 111.1 111.1 162.1 224 224 224zM200 48c13.3 0 24 10.75 24 24s-10.7 24-24 24-24-10.75-24-24 10.8-24 24-24z"
    />
    <path
      d="M128 352v-16c0-8.9-7.1-16-16-16H80c-8.88 0-16 7.1-16 16v16.01h64zm128-133.2V352h-64V218.8c10.2 3 20.8 5.2 32 5.2s21.8-2.2 32-5.2z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgJoystick;
