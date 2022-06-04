import * as React from "react";
import { SVGProps } from "react";

const SvgLandmarkFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M352 0c8.8 0 16 7.164 16 16v64c0 8.84-7.2 16-16 16h-80v32h192c17.7 0 32 14.3 32 32s-14.3 32-32 32H47.1c-16.77 0-32-14.3-32-32s15.23-32 32-32h192V16c0-8.836 8.1-16 16-16H352zM63.1 224h64v192h40V224h64v192H280V224h64v192h40V224h64v196.3c.6.3 1.2-.2 1.8 1.1l48 32c11.7 7.8 16.9 22.4 12.8 35.9-4.1 13.5-16.5 22.7-30.6 22.7H31.1c-13.2 0-25.642-9.2-29.728-22.7-4.087-13.5 1.143-28.1 12.878-35.9l48-32c.57-1.3 1.15-.8.85-1.1V224z" />
  </svg>
);

export default SvgLandmarkFlag;