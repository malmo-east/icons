import * as React from "react";
import { SVGProps } from "react";

const SvgMenorah = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="menorah_svg__fa-primary"
      d="M544 144c0-8.9-7.1-16-16-16h-32c-8.9 0-16 7.1-16 16v144h64V144zm-96 0c0-8.9-7.1-16-16-16h-32c-8.9 0-16 7.1-16 16v144h64V144zm176-16h-32c-8.8 0-16 7.2-16 16v144c0 17.6-14.4 32-32 32H352V144c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v176H96c-17.6 0-32-14.4-32-32V144c0-8.8-7.16-16-16-16H16c-8.836 0-16 7.2-16 16v144c0 53.02 42.98 96 96 96h192v64H176c-26.5 0-48 21.5-48 48 0 8.8 7.2 16 16 16h352c8.836 0 16-7.164 16-16 0-26.51-21.49-48-48-48H352v-64h192c53.02 0 96-42.98 96-96V144c0-8.8-7.2-16-16-16zm-464 16c0-8.9-7.1-16-16-16h-32c-8.9 0-16 7.1-16 16v144h64V144zm96 0c0-8.9-7.1-16-16-16h-32c-8.9 0-16 7.1-16 16v144h64V144z"
    />
    <path
      d="M416 95.1c17.62 0 32-14.38 32-32S416 0 416 0s-32 46.37-32 63.1 14.4 32 32 32zm192 0c17.62 0 32-14.38 32-32S608 0 608 0s-32 46.37-32 63.1 14.4 32 32 32zm-288 0c17.62 0 32-14.38 32-32S320 0 320 0s-32 46.37-32 63.1 14.4 32 32 32zm192 0c17.62 0 32-14.38 32-32S512 0 512 0s-32 46.37-32 63.1 14.4 32 32 32zm-288 0c17.62 0 32-14.38 32-32S224 0 224 0s-32 46.37-32 63.1 14.4 32 32 32zm-192 0c17.62 0 32-14.38 32-32S32 0 32 0 0 46.37 0 63.1s14.38 32 32 32zm96 0c17.62 0 32-14.38 32-32S128 0 128 0 96 46.37 96 63.1s14.4 32 32 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgMenorah;
