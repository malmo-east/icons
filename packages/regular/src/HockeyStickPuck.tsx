import * as React from "react";
import { SVGProps } from "react";

const SvgHockeyStickPuck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M592 384H432c-26.51 0-48 21.49-48 48v32c0 26.51 21.49 48 48 48h160c26.51 0 48-21.49 48-48v-32c0-26.5-21.5-48-48-48zm0 80H432v-32h160v32zM512 24.04C512 10.04 500.51 0 488.02 0c-8.674 0-17.06 4.74-21.33 12.99l-158.1 307.3a24.219 24.219 0 0 0-3.719-.281H56c-30.88 0-56 25.12-56 55.1v79.1C0 486.9 25.12 512 56 512h153c33.05 0 63-18.22 78.16-47.56l222.1-429.4c1.84-3.52 2.74-7.29 2.74-11zM96 464H56c-4.406 0-8-3.594-8-8v-79.1c0-4.406 3.594-7.998 8-7.998L96 368v96zm148.6-21.6c-6.9 13.3-20.5 21.6-35.6 21.6h-81v-95.1h155l-38.4 73.5z" />
  </svg>
);

export default SvgHockeyStickPuck;
