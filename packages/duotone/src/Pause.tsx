import * as React from "react";
import { SVGProps } from "react";

const SvgPause = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <defs>
      <style />
    </defs>
    <path
      className="pause_svg__fa-primary"
      d="M272 63.1c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48s48-21.49 48-48v-288c0-25.61-21.5-48-48-48zm-224 0c-26.51 0-48 21.49-48 48v288C0 426.5 21.49 448 48 448s48-21.5 48-48V112c0-26.51-21.49-48.9-48-48.9z"
    />
  </svg>
);

export default SvgPause;
