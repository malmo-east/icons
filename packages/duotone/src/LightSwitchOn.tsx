import * as React from "react";
import { SVGProps } from "react";

const SvgLightSwitchOn = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="light-switch-on_svg__fa-primary"
      d="M320 0H64C28.62 0 0 28.62 0 64v384c0 35.38 28.62 64 64 64h256c35.38 0 64-28.62 64-64V64c0-35.38-28.6-64-64-64zM192 32c8.875 0 16 7.125 16 16s-7.1 16-16 16-16-7.12-16-16 7.1-16 16-16zm0 448c-8.875 0-16-7.125-16-16s7.1-16 16-16 16 7.125 16 16-7.1 16-16 16zm96-240v127.1c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48v-224c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48V240z"
    />
    <path
      d="M240 95.1h-96c-26.4 0-48 21.6-48 48V256h192V143.1c0-25.5-21.6-48-48-48z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgLightSwitchOn;
