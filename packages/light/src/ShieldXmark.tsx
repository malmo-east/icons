import * as React from "react";
import { SVGProps } from "react";

const SvgShieldXmark = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m466.5 83.69-192-80.01C268.6 1.188 262.3 0 256.1 0s-12.6 1.188-18.5 3.688l-192 80.01C27.72 91.07 16 108.6 16 127.1 16 385.4 205.4 512 255.1 512 305.2 512 496 387.3 496 127.1c0-18.5-11.7-36.03-29.5-43.41zm-2.6 44.61c0 225.3-166.2 351.7-207.8 351.7C213.3 479.1 48 352.2 48 128c0-6.5 3.875-12.25 9.75-14.75l192-80a16.221 16.221 0 0 1 6.258-1.266c2.071 0 4.154.407 6.117 1.266l192 80c9.175 3.85 9.775 12.55 9.775 15.05zM336 192c0-8.527-6.865-16-16-16a15.933 15.933 0 0 0-11.31 4.688L256 233.4l-52.7-52.7c-3.1-3.1-7.2-4.7-11.3-4.7-9.1 0-16 7.5-16 16 0 4.094 1.562 8.188 4.688 11.31L233.4 256l-52.7 52.7c-3.1 3.1-4.7 7.2-4.7 11.3 0 8.572 6.915 16 16 16a15.94 15.94 0 0 0 11.31-4.688L256 278.6l52.69 52.69C311.8 334.4 315.9 336 320 336c8.5 0 16-6.9 16-16 0-4.094-1.562-8.188-4.688-11.31L278.6 256l52.69-52.69C334.4 200.2 336 196.1 336 192z" />
  </svg>
);

export default SvgShieldXmark;