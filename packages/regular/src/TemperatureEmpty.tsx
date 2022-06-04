import * as React from "react";
import { SVGProps } from "react";

const SvgTemperatureEmpty = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M160 320c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.5-48-48-48zm112-41.5V112C272 50.13 221.88 0 160.9 0S48 50.13 48 112v166.5C28.25 303.12 16 334 16 368c0 79.5 64.5 143.1 144 143.1S304 447.5 304 368c0-34-12.2-64.9-32-89.5zM160 464c-52.88 0-96-43.13-96-96 0-27 11.75-47.25 21.5-59.5L96 295.4V112c0-35.25 28.75-64 64-64s64 28.75 64 64v183.3l10.5 13.12C244.3 320.8 256 341 256 368c0 52.9-43.1 96-96 96z" />
  </svg>
);

export default SvgTemperatureEmpty;
