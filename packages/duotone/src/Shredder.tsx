import * as React from "react";
import { SVGProps } from "react";

const SvgShredder = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="shredder_svg__fa-primary"
      d="M448 192H64c-35.35 0-64 28.7-64 64v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96c0-35.3-28.7-64-64-64zm-16 104c-13.25 0-24-10.75-24-24 0-13.27 10.75-24 24-24s24 10.73 24 24c0 13.3-10.7 24-24 24z"
    />
    <path
      d="M424 416v72c0 13.3 10.7 24 24 24s24-10.75 24-23.1V416h-48zM40 488c0 13.3 10.75 24 23.1 24S88 501.3 88 488v-72H40v72zm192 0c0 13.3 10.7 24 24 24s24-10.75 24-23.1V416h-48v72zm-96 0c0 13.3 10.7 24 23.1 24s24.9-10.7 24.9-24v-72h-48v72zm192 0c0 13.3 10.7 24 24 24s24-10.75 24-23.1V416h-48v72zm120-296V77.25c0-8.484-3.375-16.62-9.375-22.62l-45.25-45.25C387.4 3.375 379.2 0 370.8 0H96C78.34 0 64 14.33 64 32v160h64V64h229.5L384 90.51V192h64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgShredder;
