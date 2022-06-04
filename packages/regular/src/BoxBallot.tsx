import * as React from "react";
import { SVGProps } from "react";

const SvgBoxBallot = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M520 160h-40v48h40c4.406 0 8 3.594 8 8v104H48V216c0-4.406 3.594-8 8-8h40v-48H56c-30.87 0-56 25.1-56 56v240c0 30.9 25.13 56 56 56h464c30.88 0 56-25.12 56-56V216c0-30.9-25.1-56-56-56zm8 296c0 4.406-3.594 8-8 8H56c-4.406 0-8-3.594-8-8v-88h480v88zM160 256h256c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H160c-17.7 0-32 14.33-32 32v192c0 17.7 14.3 32 32 32zm16-208h224v160H176V48z" />
  </svg>
);

export default SvgBoxBallot;
